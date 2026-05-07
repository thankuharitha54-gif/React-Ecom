import React, { useState } from 'react'
import './home.css'

function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="home-page">

      {/* NAVBAR */}
      <header className="navbar-container">
        <nav className="navbar">

          <div className="logo">
            <img
              src="/ChatGPT Image May 6, 2026, 04_35_33 PM.png"
              alt="logo"
            />
            <span>TREXO</span>
          </div>

          <div
            className="menu-icon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            
          </div>

          <div className={`nav ${menuOpen ? 'active' : ''}`}>
            <a href="/">Home</a>
            <a href="/Login">Login</a>
          </div>

        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="hero-section">

        <div className="hero-content">
          <p className="small-text">PREMIUM COLLECTION</p>

          <h1>
            Step Into <br />
            Luxury
          </h1>

          <p className="hero-description">
            Premium sneakers crafted for style, comfort,
            and confidence. Elevate every step with
            TREXO.
          </p>

          <div className="hero-buttons">
            <a href="/Userproduct" className="shop-btn">
              Shop Now
            </a>

            <a href="/Register" className="explore-btn">
              Explore More
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://i.pinimg.com/1200x/3a/30/57/3a3057a21ef05c3e4c41aac2198d85a1.jpg"
            alt="shoe"
          />
        </div>

      </section>

      {/* BRANDS */}
      <section className="brands">
        <h3>Trusted Premium Style</h3>

        <div className="brand-container">
          <span>NIKE</span>
          <span>ADIDAS</span>
          <span>PUMA</span>
          <span>JORDAN</span>
          <span>NEW BALANCE</span>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">

        <div className="feature-card">
          <h2>Premium Quality</h2>
          <p>
            Crafted with top-tier materials for maximum durability.
          </p>
        </div>

        <div className="feature-card">
          <h2>Modern Design</h2>
          <p>
            Trend-setting sneaker collections for every generation.
          </p>
        </div>

        <div className="feature-card">
          <h2>Ultimate Comfort</h2>
          <p>
            Designed for all-day comfort and premium performance.
          </p>
        </div>

      </section>

      {/* COLLECTION */}
      <section className="collection-section">

        <div className="collection-text">
          <p className="small-text">LIMITED EDITION</p>

          <h2>Designed For The Future</h2>

          <p>
            Experience premium streetwear fashion with exclusive
            sneaker collections made to stand out.
          </p>

          <a href="/Userproduct" className="shop-btn">
            View Collection
          </a>
        </div>

        <div className="collection-image">
          <img
            src="https://i.pinimg.com/1200x/fd/65/27/fd652727a43c22b9030451d27707ae66.jpg"
            alt="shoe"
          />
        </div>

      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 TREX0. All Rights Reserved.</p>
      </footer>

    </div>
  )
}

export default Home