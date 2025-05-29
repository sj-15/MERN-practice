import { useState } from "react";
import { useProductStore } from "../store/product";
import ProductCard from "./ProductCard";

export default function Home() {
  const { fetchProducts, products } = useProductStore();
  useState(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <div>
      <h1>Product List</h1>
      <div
        className="product-list"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
