
import { useState } from 'react';
import './App.css'

function App() {
      const [products, setProducts] = useState([
        { id: 1, name: "Mouse", price: 22.99, inStock: true, quantity: 13 },
        { id: 2, name: "Keyboard", price: 44.99, inStock: true, quantity: 8 },
        { id: 3, name: "Monitor", price: 55.99, inStock: false, quantity: 0 },
        { id: 4, name: "Laptop", price: 750.55, inStock: true, quantity: 5 },
      ]);


  return (
    <div>
      <div className="header-info">
        <h1>Store</h1>
        <h2>Cart Item: </h2>
        <h2>Total Price: $0</h2>
      </div>
      <div className="product-cards">
        {products.map((product) => {
          return (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <p>{product.inStock ? "Available" : "Unavailable"}</p>
              <p>Quantity: {product.quantity}</p>
              <button>Add to Cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App
