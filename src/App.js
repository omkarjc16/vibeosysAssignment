import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "./components/productlist";
import ProductForm from "./components/productform";
import UpdateProduct from "./components/UpdateProduct";

const App = () => {
  return (
    <div>
      <header>
        <h1>Manufacturing Inventory Management</h1>
        <nav>
          <a href="/">Product List</a> | <a href="/add-product">Add Product</a>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/add-product" element={<ProductForm />} />
          <Route path="/update-product/:id" element={<UpdateProduct />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
