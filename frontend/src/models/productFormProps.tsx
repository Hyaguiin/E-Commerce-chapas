// Definindo o tipo da categoria
type ProductCategory = "cavalo" | "charuto" | "whisky"; // Supondo que as categorias sejam dessas

interface ProductFormProps {
  selectedProduct: ProductCategory | null; // Tipando a categoria
  onCancel: () => void; // Função que será chamada ao cancelar
  onProductAdded: () => void; // Função chamada após a adição do produto
}
