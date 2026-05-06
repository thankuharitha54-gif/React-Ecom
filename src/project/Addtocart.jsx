import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Addtocart.css'

function Addtocart() {

  const [product, setProduct] = useState([])

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('loggeduser'))
    const cartproducts = JSON.parse(localStorage.getItem('Cart')) || []

    let usercart = cartproducts.filter(item => item.user === user?.email)
    setProduct(usercart)
  }, [])

  const removeItem = (index) => {
    const updatedProducts = [...product]
    updatedProducts.splice(index, 1)
    setProduct(updatedProducts)
    localStorage.setItem('Cart', JSON.stringify(updatedProducts))
    alert('Item removed from cart')
  }

  const total = product.reduce((sum, item) => {
    return sum + Number(item.price)
  }, 0)

  return (
    <div className="cart-container">

      <h2 className="cart-title">Your Cart</h2>

      {product.length === 0 ? (
        <p className="empty">No products found</p>
      ) : (
        <div className="cart-grid">
          {product.map((item, index) => (
            <div key={index} className="cart-card">
                <img src={item.image} alt="cart image" />

              <h3>{item.name}</h3>
              <p><span>Price:</span> ₹{item.price}</p>
              <p><span>Description:</span> {item.description}</p>
              <p className="offer">{item.offer}</p>

              <button
                className="remove-btn"
                onClick={() => removeItem(index)}
              >
                Remove
              </button>

            </div>
          ))}
        </div>
      )}

      <div className="cart-footer">
        <h3>Total: ₹{total}</h3>

        <Link to="/checkout">
          <button className="checkout-btn">
            Proceed to Checkout
          </button>
        </Link>
      </div>

    </div>
  )
}

export default Addtocart