function AddProduct({ name, setName, price, setPrice, category, setCategory, addProduct }) {
  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-indigo-700 mb-6">
        Add Product
      </h2>

      <form onSubmit={addProduct} className="space-y-4">
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
        />

        <input
          type="number"
          placeholder="Product Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          min="0"
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border p-3 rounded-lg"
        >
          <option>Electronics</option>
          <option>Clothing</option>
          <option>Books</option>
          <option>Other</option>
        </select>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;