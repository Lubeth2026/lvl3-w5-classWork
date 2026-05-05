
import { useState } from 'react';
import './App.css'
import ProductList from './components/ProductList';

function App() {
      const [totalPrice, setTotalPrice] = useState(0);
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
          {/*This adds up the price of all items clicked going into the cart*/}
           setTotalPrice(totalPrice + product.price)
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
        {/*This adds up the price of all items clicked going into the cart*/}
        <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
      </div>
      <ProductList products={products} handleAddToCart={handleAddToCart}/>
    </div>
  );
}

export default App
