import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center bg-indigo-50 p-6">
      <h1 className="text-4xl font-bold text-indigo-700 mb-4">
        Welcome to Product Manager
      </h1>

      <p className="text-gray-600 mb-6">
        Add and manage your products easily.
      </p>

      <Link
        to="/add"
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
      >
        Add New Product
      </Link>
    </div>
  );
}

export default Home;