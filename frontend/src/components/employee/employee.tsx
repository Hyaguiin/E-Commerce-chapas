import React, { useEffect, useState } from "react";
import {
  getAllEmployees,
  addEmployee,
  deleteEmployee,
  updateEmployee,
} from "../../services/employeeService";
import { Employee } from "../../models/employeeModel";

const Employer = () => {
  const [employees, setEmployees] = useState<Employee[] | []>([]);
  const [showModal, setShowModal] = useState(false); // Para mostrar/ocultar o modal
  const [newEmployee, setNewEmployee] = useState<Employee>({
    id: 0, // ID será gerado automaticamente pelo backend
    name: "",
    role: "",
    salary: 0,
  });
  const [loading, setLoading] = useState<{
    fetch: boolean;
    add: boolean;
    delete: boolean;
    update: boolean;
  }>({
    fetch: false,
    add: false,
    delete: false,
    update: false,
  });

  const fetchEmployees = async () => {
    setLoading((prevState) => ({ ...prevState, fetch: true }));
    try {
      const response = await getAllEmployees();
      setEmployees(response.data);
    } catch (error) {
      console.error("Erro ao carregar funcionários", error);
    } finally {
      setLoading((prevState) => ({ ...prevState, fetch: false }));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewEmployee({
      ...newEmployee,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newEmployee.id === 0) {
      // Adicionar novo funcionário
      setLoading((prevState) => ({ ...prevState, add: true }));
      try {
        const response = await addEmployee(newEmployee);
        if (response) {
          fetchEmployees(); // Recarregar a lista de funcionários
          setShowModal(false); // Fechar o modal após a adição
          setNewEmployee({ id: 0, name: "", role: "", salary: 0 }); // Limpar o formulário
        }
      } catch (error) {
        console.error("Erro ao adicionar funcionário", error);
      } finally {
        setLoading((prevState) => ({ ...prevState, add: false }));
      }
    } else {
      // Atualizar funcionário existente
      setLoading((prevState) => ({ ...prevState, update: true }));
      try {
        const response = await updateEmployee(Number(newEmployee.id), newEmployee);
        if (response) {
          fetchEmployees(); // Atualizar lista de funcionários
          setShowModal(false); // Fechar modal
          setNewEmployee({ id: 0, name: "", role: "", salary: 0 }); // Limpar formulário
        }
      } catch (error) {
        console.error("Erro ao atualizar funcionário", error);
      } finally {
        setLoading((prevState) => ({ ...prevState, update: false }));
      }
    }
  };

  const handleEdit = (employee: Employee) => {
    setNewEmployee(employee); // Preenche o formulário com as informações do funcionário a ser editado
    setShowModal(true); // Exibe o modal
  };

  const handleDelete = async (employeeId: number | undefined) => {
    setLoading((prevState) => ({ ...prevState, delete: true }));
    try {
      const response = await deleteEmployee(Number(employeeId));
      if (response) {
        fetchEmployees(); // Atualiza a lista após a exclusão
      }
    } catch (error) {
      console.error("Erro ao excluir funcionário", error);
    } finally {
      setLoading((prevState) => ({ ...prevState, delete: false }));
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="overflow-x-auto p-6">
      <div className="mb-4">
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Adicionar Funcionário
        </button>
      </div>

      {/* Spinner de Carregamento */}
      {(loading.fetch || loading.add || loading.delete || loading.update) && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="spinner-border animate-spin rounded-full border-t-4 border-yellow-500 w-16 h-16"></div>
        </div>
      )}

      {!loading.fetch ? (
        <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-800 text-white">
              {["ID", "Nome", "Funcionalidade", "Salário", "Ações"].map(
                (header) => (
                  <th
                    key={header}
                    className="bg-black py-3 px-6 text-left transition-colors duration-200 hover:bg-yellow-500"
                  >
                    {header}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {employees
              .sort((a, b) => a.name.localeCompare(b.name)) // Ordena por nome em ordem alfabética
              .map((employee) => (
                <tr
                  key={employee.id}
                  className="hover:bg-gray-100 transition duration-200"
                >
                  <td className="py-4 px-6 border-b border-gray-200">
                    {employee.id}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200">
                    {employee.name}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200">
                    {employee.role}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200">
                    R$ {Number(employee.salary).toFixed(2)}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200 flex space-x-2">
                    <button
                      onClick={() => handleEdit(employee)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(employee.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center py-4">Carregando funcionários...</div>
      )}

      {/* Modal de Adicionar/Editar Funcionário */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-md w-96">
            <h3 className="text-xl font-bold mb-4">
              {newEmployee.id ? "Editar Funcionário" : "Adicionar Funcionário"}
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newEmployee.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="role" className="block text-gray-700">
                  Função
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={newEmployee.role}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="salary" className="block text-gray-700">
                  Salário
                </label>
                <input
                  type="number"
                  id="salary"
                  name="salary"
                  value={newEmployee.salary}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  disabled={loading.add || loading.update} // Desabilita o botão enquanto o formulário está sendo enviado
                >
                  {loading.add || loading.update
                    ? "Salvando..."
                    : newEmployee.id
                    ? "Atualizar"
                    : "Adicionar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Employer;
