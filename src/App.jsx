
import { useState } from 'react';
import './App.css'

function App() {
      const [cartItemCount, setCartItemCount] = useState(0);
      const [products, setProducts] = useState([
        { id: 1, name: "Mouse", price: 22.99, inStock: true, quantity: 13 },
        { id: 2, name: "Keyboard", price: 44.99, inStock: true, quantity: 8 },
        { id: 3, name: "Monitor", price: 55.99, inStock: false, quantity: 0 },
        { id: 4, name: "Laptop", price: 750.55, inStock: true, quantity: 5 },
      ]);
      const handleAddToCart = (id)=>{
        {/*This reduces the quantity of actual items inStock once clicked to cart*/}
        setProducts(
          products.map((product)=>{
           if(id === product.id){
          const newQuantity = product.quantity - 1;
            return {...product, quantity: newQuantity, inStock: newQuantity > 0}
           } 
            return product
          }));
        {/*This counts/adds the items going into the cart*/}
        setCartItemCount(cartItemCount + 1);
      }


  return (
    <div>
        <h3>Day 1 Class DEMO</h3>
      <div className="header-info">
        <h1>Store</h1>
        <h2>Cart Item: {cartItemCount}</h2>
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
              {/*The disabled={} below deactivates the button on items that aren't inStock*/}
              <button disabled={!product.inStock} onClick={()=> handleAddToCart(product.id)}>Add to Cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App
