// src/components/UpdateProduct.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../redux/actions";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.products.find((product) => product.id === parseInt(id))
  );

  const [updatedProduct, setUpdatedProduct] = useState(null);

  useEffect(() => {
    if (product) {
      setUpdatedProduct({ ...product });
    }
  }, [product]);

  const handleMaterialChange = (index, name, value) => {
    const updatedMaterials = updatedProduct.materials.map((material, i) =>
      i === index ? { ...material, [name]: value } : material
    );

    const totalCost = updatedMaterials.reduce(
      (sum, material) => sum + material.totalAmount,
      0
    );

    setUpdatedProduct((prev) => ({ ...prev, materials: updatedMaterials, totalCost }));
  };

  const handleProductChange = (name, value) => {
    setUpdatedProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(updatedProduct));
    navigate("/");
  };

  if (!updatedProduct) return <p>Loading...</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Product</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={updatedProduct.name}
        onChange={(e) => handleProductChange("name", e.target.value)}
      />
      <select
        value={updatedProduct.unit}
        onChange={(e) => handleProductChange("unit", e.target.value)}
      >
        <option value="">Select Unit</option>
        <option value="ml">ml</option>
        <option value="ltr">ltr</option>
        <option value="gm">gm</option>
        <option value="kg">kg</option>
        <option value="mtr">mtr</option>
        <option value="mm">mm</option>
        <option value="box">box</option>
        <option value="units">units</option>
      </select>
      <select
        value={updatedProduct.category}
        onChange={(e) => handleProductChange("category", e.target.value)}
      >
        <option value="">Select Category</option>
        <option value="Finished">Finished</option>
        <option value="Semi finished">Semi finished</option>
        <option value="Subsidiary">Subsidiary</option>
      </select>
      <input
        type="date"
        value={updatedProduct.expiry}
        onChange={(e) => handleProductChange("expiry", e.target.value)}
      />
      <h3>Materials</h3>
      {updatedProduct.materials.map((material, index) => (
        <div key={material.id}>
          <input
            type="text"
            placeholder="Material Name"
            value={material.name}
            onChange={(e) => handleMaterialChange(index, "name", e.target.value)}
          />
          <input
            type="number"
            placeholder="Quantity"
            value={material.quantity}
            onChange={(e) => handleMaterialChange(index, "quantity", e.target.value)}
          />
          <input
            type="number"
            placeholder="Price"
            value={material.price}
            onChange={(e) => handleMaterialChange(index, "price", e.target.value)}
          />
        </div>
      ))}
      <button type="submit">Update Product</button>
    </form>
  );
};

export default UpdateProduct;
