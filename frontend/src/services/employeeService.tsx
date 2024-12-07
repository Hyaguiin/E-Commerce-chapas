import axios from "axios";
import { Employee } from "../models/employeeModel";
import { EMPLOYEE_API_URL } from "../constants/apiUrls";

// Get all employees
export async function getAllEmployees(): Promise<any> {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(EMPLOYEE_API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching employees:", error);
    throw error; // Propagate error if necessary
  }
}

// Get employee by ID
export async function getEmployeeById(id: number): Promise<any> {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${EMPLOYEE_API_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching employee with ID ${id}:`, error);
    throw error; // Propagate error if necessary
  }
}

// Add new employee
export async function addEmployee(employee: Employee): Promise<any> {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(EMPLOYEE_API_URL, employee, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding new employee:", error);
    throw error; // Propagate error if necessary
  }
}

// Update existing employee
export async function updateEmployee(id: number, employee: Employee): Promise<any> {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.put(`${EMPLOYEE_API_URL}/${id}`, employee, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error updating employee with ID ${id}:`, error);
    throw error; // Propagate error if necessary
  }
}

// Delete employee
export async function deleteEmployee(id: number): Promise<any> {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.delete(`${EMPLOYEE_API_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error deleting employee with ID ${id}:`, error);
    throw error; // Propagate error if necessary
  }
}
