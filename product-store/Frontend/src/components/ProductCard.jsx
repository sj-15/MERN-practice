import "../app.css";
import { useProductStore } from "../store/product";
import Modal from "./Modal";
import { useState } from "react";

export default function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { deleteProduct } = useProductStore();
  const handleDelete = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (success) {
      alert(message);
    } else {
      alert("Failed to delete product: " + message);
    }
  };

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
        style={{ width: "120px", height: "80px" }}
      />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">{product.price.toFixed(2)}</p>
      <div className="product-actions">
        <button
          className="edit"
          onClick={() => {
            handleEdit();
          }}
        >
          Edit
        </button>
        <button className="delete" onClick={() => handleDelete(product._id)}>
          Delete
        </button>
      </div>
      {
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          product={product}
          className="modal-content"
        />
      }
    </div>
  );
}
