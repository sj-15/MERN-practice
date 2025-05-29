import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  addProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.image || newProduct.price <= 0) {
      return { success: false, error: "Invalid product data" };
    }
    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      if (!response.ok) {
        const errorData = await response.json();
        return {
          success: false,
          error: errorData.message || "Failed to add product",
        };
      }
      const data = await response.json();
      set((state) => ({
        products: [...state.products, data.data],
      }));
      return { success: true, message: "Product added successfully" };
    } catch (error) {
      console.error("Error adding product:", error.stack);
      return { success: false, message: "Failed to add product" };
    }
  },
  fetchProducts: async () => {
    const response = await fetch("/api/products");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    set({ products: data.data });
  },
  deleteProduct: async (pid) => {
    try {
      const response = await fetch(`/api/products/${pid}`, {
        method: "DELETE",
      });
      const data = await response.json();

      if (!data.success) {
        return {
          success: false,
          message: data.message || "Failed to delete product",
        };
      }
      // update the ui immediately
      set((state) => ({
        products: state.products.filter((product) => product._id !== pid),
      }));
      return {
        success: true,
        message: data.message || "Product deleted successfully",
      };
    } catch (error) {
      console.error("Error deleting product:", error);
      return { success: false, message: "Failed to delete product" };
    }
  },
  updateProduct: async(pid, updatedProduct)=>{
    try{
      const response = await fetch(`/api/products/${pid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      });
      const data = await response.json();

      if (!data.success) {
        return {
          success: false,
          message: data.message || "Failed to update product",
        };
      }
      // update the ui immediately
      set((state) => ({
        products: state.products.map((product) =>
          product._id === pid ? data.data : product
        ),
      }));
      return {
        success: true,
        message: data.message || "Product updated successfully",
      };
    } catch (error) {
      console.error("Error updating product:", error);
      return { success: false, message: "Failed to update product" };
    }
  }
}));
