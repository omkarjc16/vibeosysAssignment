import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addProduct, updateProduct } from "../redux/actions";

const ProductForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const existingProduct = useSelector((state) =>
    state.products.find((product) => product.id === Number(id))
  );

  const [product, setProduct] = useState({
    name: "",
    unit: "",
    category: "",
    expiry: "",
    materials: [],
    totalCost: 0,
  });

  useEffect(() => {
    if (existingProduct) {
      setProduct(existingProduct);
    }
  }, [existingProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (existingProduct) {
      dispatch(updateProduct(product));
    } else {
      dispatch(addProduct({ ...product, id: Date.now() }));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{existingProduct ? "Update Product" : "Add Product"}</h2>
      {/* Input fields here */}
      <button type="submit">{existingProduct ? "Update Product" : "Save Product"}</button>
    </form>
  );
};

export default ProductForm;
