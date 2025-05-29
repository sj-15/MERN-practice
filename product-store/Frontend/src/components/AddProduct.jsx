import { useState } from "react";
import { useProductStore } from "../store/product"; // Adjust the import path as necessary

export default function AddProduct() {
  const [products, setProducts] = useState({
    name: "",
    image: "",
    price: "",
  });

  const { addProduct } = useProductStore();

  const handleSubmit = async () => {
    const { success, message } = await addProduct(products);
    if (success) {
      alert(message);
    } else {
      alert("Failed to add product: " + message);
    }
    setProducts({ name: "", image: "", price: "" });
  };

  return (
    <div>
      <h1>Add Product</h1>

      <div>
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          name="productName"
          value={products.name}
          onChange={(e) => setProducts({ ...products, name: e.target.value })}
          required
        />
      </div>
      <div>
        <label htmlFor="productImage">Product Image:</label>
        <input
          type="text"
          id="productImage"
          name="productImage"
          value={products.image}
          onChange={(e) => setProducts({ ...products, image: e.target.value })}
          required
        />
      </div>
      <div>
        <label htmlFor="productPrice">Product Price:</label>
        <input
          type="number"
          id="productPrice"
          name="productPrice"
          value={products.price}
          onChange={(e) => setProducts({ ...products, price: e.target.value })}
          required
        />
      </div>
      <button onClick={handleSubmit}>Add Product</button>
    </div>
  );
}
