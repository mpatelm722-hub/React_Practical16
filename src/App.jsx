import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import ProductList from "./pages/ProductList";

function Layout() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Electronics");
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  function addProduct(e) {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      name,
      price,
      category,
    };

    setProducts([...products, newProduct]);
    setName("");
    setPrice("");
    setCategory("Electronics");

    navigate("/products");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/add"
          element={
            <AddProduct
              name={name}
              setName={setName}
              price={price}
              setPrice={setPrice}
              category={category}
              setCategory={setCategory}
              addProduct={addProduct}
            />
          }
        />

        <Route path="/products" element={<ProductList products={products} />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
