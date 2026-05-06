import React, { useState, useEffect } from 'react'
import './userproduct.css'

function Userproduct() {
  const [product, setProduct] = useState([])

  useEffect(() => {
    const storedproducts = JSON.parse(localStorage.getItem('Products')) || []
    setProduct(storedproducts)
  }, []) // ✅ FIXED

  const addtocart = (product) => {
    let user = JSON.parse(localStorage.getItem('loggeduser')) || {}
    let cart = JSON.parse(localStorage.getItem('Cart')) || []

    let newitem = {
      ...product,
      user: user.email
    }

    cart.push(newitem)
    localStorage.setItem('Cart', JSON.stringify(cart))
    alert('Product added to cart')
  }

  return (
    <div className="product-container">
      <h2 className="title">Our Collection</h2>

      {product.length === 0 ? (
        <p className="empty">No products found</p>
      ) : (
        <div className="grid">
          {product.map((item, index) => (
            <div key={index} className="card">
              <img src={item.image} alt="product" />

              <div className="card-body">
                <h3>{item.name}</h3>
                <p className="price">₹{item.price}</p>
                <p className="desc">{item.description}</p>
                <span className="offer">{item.offer}</span>

                <button onClick={() => addtocart(item)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Userproduct