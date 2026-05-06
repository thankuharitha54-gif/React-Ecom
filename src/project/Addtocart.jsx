import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Addtocart.css'

function Addtocart() {

  const [product, setProduct] = useState([])

  useEffect(() => {

    let user =
      JSON.parse(localStorage.getItem('loggeduser'))

    const cartproducts =
      JSON.parse(localStorage.getItem('Cart')) || []

    let usercart = cartproducts.filter(
      item => item.user === user?.email
    )

    setProduct(usercart)

  }, [])

  const removeItem = (index) => {

    const updatedProducts = [...product]

    updatedProducts.splice(index, 1)

    setProduct(updatedProducts)

    localStorage.setItem(
      'Cart',
      JSON.stringify(updatedProducts)
    )

    alert('Item removed from cart')
  }

  const total = product.reduce((sum, item) => {
    return sum + Number(item.price)
  }, 0)

  return (

    <div className="cart-page">

      {/* HEADER */}

      <div className="cart-header">

        <p className="small-text">
          PREMIUM SNEAKER CART
        </p>

        <h1>
          Your Shopping Cart
        </h1>

      </div>

      {/* EMPTY */}

      {product.length === 0 ? (

        <div className="empty-cart">

          <h2>Your Cart is Empty</h2>

          <p>
            Add premium sneakers to your cart
            and start shopping.
          </p>

          <Link to="/Userproduct">
            <button className="shop-btn">
              Explore Collection
            </button>
          </Link>

        </div>

      ) : (

        <>
          {/* PRODUCTS */}

          <div className="cart-grid">

            {product.map((item, index) => (

              <div
                key={index}
                className="cart-card"
              >

                <div className="image-box">

                  <img
                    src={item.image}
                    alt="shoe"
                  />

                </div>

                <div className="card-content">

                  <h3>{item.name}</h3>

                  <p className="price">
                    ₹{item.price}
                  </p>

                  <p className="description">
                    {item.description}
                  </p>

                  <p className="offer">
                    {item.offer}
                  </p>

                  <button
                    className="remove-btn"
                    onClick={() => removeItem(index)}
                  >
                    Remove Item
                  </button>

                </div>

              </div>

            ))}

          </div>

          {/* FOOTER */}

          <div className="cart-footer">

            <div className="total-box">

              <h2>
                Total :
                <span> ₹{total}</span>
              </h2>

              <p>
                Shipping and taxes calculated
                at checkout.
              </p>

            </div>

            <Link to="/checkout">

              <button className="checkout-btn">
                Proceed to Checkout
              </button>

            </Link>

          </div>
        </>
      )}

    </div>
  )
}

export default Addtocart