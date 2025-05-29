import { useState } from "react";
import { useProductStore } from "../store/product";
import "../app.css";

export default function Modal({ isOpen, onClose, product }) {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const { updateProduct } = useProductStore();
  const handleUpdateProduct = async () => {
    const { success, message } = await updateProduct(
      product._id,
      updatedProduct
    );
    if (success) {
      alert(message);
      onClose(); // Close the modal after successful update
    } else {
      alert("Failed to update product: " + message);
    }
    setUpdatedProduct(product);
  };
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
      </div>
      <h2>Edit Product</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          defaultValue={product.name}
          onChange={(e) =>
            setUpdatedProduct({ ...updatedProduct, name: e.target.value })
          }
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          defaultValue={product.price}
          onChange={(e) =>
            setUpdatedProduct({ ...updatedProduct, price: e.target.value })
          }
        />
      </div>
      <div>
        <label>Image URL:</label>
        <input
          type="text"
          defaultValue={product.image}
          onChange={(e) =>
            setUpdatedProduct({ ...updatedProduct, image: e.target.value })
          }
        />
      </div>
      <button onClick={() => handleUpdateProduct(product._id, updatedProduct)}>
        Save
      </button>
    </div>
  );
}
