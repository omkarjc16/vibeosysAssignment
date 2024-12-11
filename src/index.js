import React from "react";
import ReactDOM from "react-dom/client"; // Use react-dom/client for React 18+
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./redux/store";
import ProductList from "./components/productlist";
import ProductForm from "./components/productform";
import UpdateProduct from "./components/UpdateProduct";

<Routes>
  <Route path="/" element={<ProductList />} />
  <Route path="/add-product" element={<ProductForm />} />
  <Route path="/update-product/:id" element={<UpdateProduct />} />
</Routes>


const Root = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add-product" element={<ProductForm />} />
        <Route path="/update-product/:id" element={<UpdateProduct />} />
      </Routes>
    </Router>
  </Provider>
);

const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root container
root.render(<Root />); // Render the application
