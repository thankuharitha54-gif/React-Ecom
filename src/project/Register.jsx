import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.css'

function Register() {

  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  const handlechange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!user.name || !user.username || !user.email || !user.password) {
      alert('Please fill all details')
      return
    }

    let users = JSON.parse(localStorage.getItem('users')) || []

    const exist = users.find(
      i => i.email === user.email
    )

    if (exist) {
      alert('User already exists')
      return
    }

    users.push(user)

    localStorage.setItem('users', JSON.stringify(users))

    alert('Registration Successful')

    navigate('/Login')
  }

  return (

    <div className="register-page">

      {/* LEFT SIDE */}

      <div className="left-section">

        <div className="overlay"></div>

        <div className="left-content">

          <p className="small-text">
            PREMIUM SNEAKER COLLECTION
          </p>

          <h1>
            Step Into <br /> Luxury
          </h1>

          <p className="description">
            Discover premium sneakers crafted for style,
            comfort and performance. Join Elan Jadoo today.
          </p>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="right-section">

        <form className="register-form" onSubmit={handleSubmit}>

          <h2>Create Account</h2>

          <p className="subtitle">
            Join the premium sneaker community
          </p>

          <input
            type="text"
            placeholder="Full Name"
            name="name"
            onChange={handlechange}
          />

          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handlechange}
          />

          <input
            type="email"
            placeholder="Email Address"
            name="email"
            onChange={handlechange}
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handlechange}
          />

          <button type="submit">
            Sign Up
          </button>

          <p className="login-link">
            Already have an account?
            <span onClick={() => navigate('/Login')}>
              Login
            </span>
          </p>

        </form>

      </div>

    </div>
  )
}

export default Register