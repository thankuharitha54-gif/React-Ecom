import React, { useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import './adminhome.css'

function Adminhome() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem('Role')
    localStorage.removeItem('currentuser')
    navigate('/Login')
    window.location.reload()
  }

  return (
    <div className="admin-container">
      <h1 className='h1'>Admin Panel</h1>

      {/* SIDEBAR */}
      <aside className={`sidebar ${menuOpen ? 'active' : ''}`}>
        <nav className="nav-links">
          <NavLink to="/Adminuser">Dashboard</NavLink>
          <NavLink to="/Adminproduct">Product</NavLink>
          <NavLink to="/AdminOrders">Orders</NavLink>
        </nav>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </aside>

      {/* MAIN */}
      <main className="main">

        {/* TOPBAR */}
        <div className="topbar">

          {/* HAMBURGER */}
          <button 
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

        <div className="content">
          <Outlet />
        </div>

      </main>

    </div>
  )
}

export default Adminhome