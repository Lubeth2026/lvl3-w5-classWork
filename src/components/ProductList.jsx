
//New Prop Created 
import React from 'react'

function ProductList({ products, handleAddToCart}) {

  return (
    <div className="product-cards">
      {products.map((product) => {
        return (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>{product.inStock ? "Available" : "Unavailable"}</p>
            <p>Quantity: {product.quantity}</p>
            {/*The disabled={} below deactivates the button on items that aren't inStock*/}
            <button
              disabled={!product.inStock}
              onClick={() => handleAddToCart(product.id)}
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList

