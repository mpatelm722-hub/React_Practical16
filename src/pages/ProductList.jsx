function ProductList({ products }) {
  return (
    <div className="max-w-5xl mx-auto mt-10 p-4">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6">
        Product List
      </h2>

      {products.length === 0 ? (
        <p className="text-gray-500">No products added yet.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">{product.name}</h3>
              <p className="text-gray-600 mt-2">
                Category: {product.category}
              </p>
              <p className="text-indigo-600 font-bold mt-3">
                ₹{product.price}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;