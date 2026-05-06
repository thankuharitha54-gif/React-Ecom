import React, { useState, useEffect } from 'react'
import './userproduct.css'

function Userproduct() {

  const [product, setProduct] = useState([])

  useEffect(() => {

    const storedproducts =
      JSON.parse(localStorage.getItem('Products')) || []

    setProduct(storedproducts)

  }, [])

  const addtocart = (product) => {

    let user =
      JSON.parse(localStorage.getItem('loggeduser')) || {}

    let cart =
      JSON.parse(localStorage.getItem('Cart')) || []

    let newitem = {
      ...product,
      user: user.email
    }

    cart.push(newitem)

    localStorage.setItem(
      'Cart',
      JSON.stringify(cart)
    )

    alert('Product added to cart')
  }

  return (

    <div className="shop-page">

      {/* HERO */}

      <div className="shop-header">

        <p className="small-text">
          PREMIUM SNEAKER COLLECTION
        </p>

        <h1>
          Discover Premium Shoes
        </h1>

        <p className="subtitle">
          Explore modern streetwear sneakers
          crafted for comfort, fashion and
          performance.
        </p>

      </div>

      {/* EMPTY */}

      {product.length === 0 ? (

        <div className="empty-box">

          <h2>No Products Found</h2>

          <p>
            Products will appear here after
            adding from admin panel.
          </p>

        </div>

      ) : (

        <div className="product-grid">

          {product.map((item, index) => (

            <div
              key={index}
              className="product-card"
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

                <p className="desc">
                  {item.description}
                </p>

                <span className="offer">
                  {item.offer}
                </span>

                <button
                  onClick={() => addtocart(item)}
                >
                  Add To Cart
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