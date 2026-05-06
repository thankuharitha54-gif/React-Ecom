import React, { useState } from 'react'
import './home.css'

function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>

      <header className="home-container">
        <nav className="nav">

          <div className="logo">
            <img
              src="/ChatGPT Image May 1, 2026, 12_17_35 PM-Photoroom.png"
              alt="logo"
            />
            <span>Elan Jadoo</span>
          </div>

          <div
            className="menu-icon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>

          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <a href="/">Home</a>
            <a href="/Userproduct">Collections</a>
            <a href="/Login">Login</a>
            <a href="/Register" className="btn">Sign Up</a>
          </div>

        </nav>
      </header>

      <section className="container1">
        <h1 className="h1">Elegance in Every Thread</h1>
        <p className="tagline">Wear the Magic. Own the Moment.</p>
      </section>

      <section className="container2">
        <div className="slider-content">
          <h2>New Collection 2026</h2>
          <p>Discover elegance & modern fashion</p>
          <a href="/Userproduct" className="btn">Shop Now</a>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>Premium Quality</h3>
          <p>Crafted with high-quality fabrics.</p>
        </div>

        <div className="feature-card">
          <h3>Latest Trends</h3>
          <p>Stay ahead with modern styles.</p>
        </div>

        <div className="feature-card">
          <h3>Affordable Luxury</h3>
          <p>Luxury fashion within your budget.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Elan Jadoo. All rights reserved.</p>
      </footer>

    </div>
  )
}

export default Home