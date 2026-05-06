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
    <div className="home-wrapper">

      {/* NAVBAR */}
      <nav className="home-navbar">
        <h2 className="logo">Elan Jadoo</h2>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <button onClick={() => navigate('/Userproduct')}>
            Shop
          </button>

          <button onClick={() => navigate('/Addtocart')}>
            🛒 Cart
            </button>
            <button onClick={() => navigate('/UserOrders')}>
            order
          </button>
          <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
        </div>
      </nav>

      {/* HERO */}
      <div className="hero-section">
        <h1>Discover Your Style ✨</h1>
        <p>Trendy. Elegant. Affordable.</p>

        <button
          className="shop-btn"
          onClick={() => navigate('/Userproduct')}
        >
          Purchase Now
        </button>
      </div>

      {/* NEW FEATURES SECTION */}
      <div className="features">
        <div className="feature-card">
          <h3>🚚 Fast Delivery</h3>
          <p>Get your orders quickly</p>
        </div>

        <div className="feature-card">
          <h3>💳 Secure Payment</h3>
          <p>Safe & trusted checkout</p>
        </div>

        <div className="feature-card">
          <h3>🔥 Best Offers</h3>
          <p>Exclusive discounts</p>
        </div>
      </div>

    </div>
  )
}

export default Userhome