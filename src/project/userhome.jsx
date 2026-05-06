import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './userhome.css'

function Userhome() {

  const navigate = useNavigate()

  const [menuOpen, setMenuOpen] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem('Role')
    localStorage.removeItem('currentuser')

    navigate('/Login')

    window.location.reload()
  }

  return (

    <div className="userhome">

      {/* NAVBAR */}

      <nav className="navbar">

        <div className="logo-section">

          <h2 className="logo">
            TREXO
          </h2>

        </div>

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        <div className={`nav-link ${menuOpen ? 'active' : ''}`}>

          <button onClick={() => navigate('/Userproduct')}>
            Shop
          </button>

          <button onClick={() => navigate('/Addtocart')}>
            🛒 Cart
          </button>

          <button onClick={() => navigate('/UserOrders')}>
            Orders
          </button>

          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>

      </nav>

      {/* HERO SECTION */}

      <section className="hero-section">

        <div className="overlay"></div>

        <div className="hero-content">

          <p className="small-text">
            PREMIUM SNEAKER COLLECTION
          </p>

          <h1>
            Step Into <br />
            Modern Luxury
          </h1>

          <p>
            Discover premium sneakers designed for
            comfort, confidence and streetwear fashion.
          </p>

          <button
            className="shop-btn"
            onClick={() => navigate('/Userproduct')}
          >
            Shop Collection
          </button>

        </div>

      </section>

      {/* FEATURES */}

      <section className="features">

        <div className="feature-card">

          <div className="icon">
            🚚
          </div>

          <h3>Fast Delivery</h3>

          <p>
            Get your sneakers delivered quickly
            with premium shipping.
          </p>

        </div>

        <div className="feature-card">

          <div className="icon">
            🔒
          </div>

          <h3>Secure Payment</h3>

          <p>
            100% safe checkout experience
            for every purchase.
          </p>

        </div>

        <div className="feature-card">

          <div className="icon">
            🔥
          </div>

          <h3>Exclusive Drops</h3>

          <p>
            Access limited edition sneaker
            collections before everyone.
          </p>

        </div>

      </section>

      {/* COLLECTION SECTION */}

      <section className="collection-section">

        <div className="collection-image">

          <img
            src="https://i.pinimg.com/1200x/27/55/b9/2755b9072d8229cdc65f6f36770fcbc1.jpg"
            alt="shoe"
          />

        </div>

        <div className="collection-content">

          <p className="small-text">
            NEW ARRIVALS
          </p>

          <h2>
            Sneakers Crafted For Style
          </h2>

          <p>
            Premium quality sneakers made for
            modern streetwear lovers. Designed
            with elegance and performance.
          </p>

          <button
            className="shop-btn"
            onClick={() => navigate('/Userproduct')}
          >
            Explore Now
          </button>

        </div>

      </section>

    </div>
  )
}

export default Userhome