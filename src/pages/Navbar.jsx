import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white p-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Product Manager</h1>

        <div className="flex gap-6">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/add" className="hover:text-yellow-300">Add Product</Link>
          <Link to="/products" className="hover:text-yellow-300">Products</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;