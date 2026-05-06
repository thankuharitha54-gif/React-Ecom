import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'

function Login() {

  const [user, setUser] = useState({
    username: '',
    password: ''
  })

  const [index, setIndex] = useState(0)
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()

  const images = [
    
    "https://i.pinimg.com/1200x/33/76/f1/3376f184c88c94ccd759df1f36e2a8a7.jpg",

  ]

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length)
  }

  const handlechange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {

    const adminmail = 'admin@gmail.com'
    const adminpass = 'admin123'

    if (!user.username || !user.password) {
      alert('Please fill the details')
      return
    }

    if (
      user.username === adminmail &&
      user.password === adminpass
    ) {
      localStorage.setItem('Role', 'Admin')
      navigate('/Adminhome')
      return
    }

    let users =
      JSON.parse(localStorage.getItem('users')) || []

    const exist = users.find(
      i =>
        i.username === user.username &&
        i.password === user.password
    )

    if (exist) {
      localStorage.setItem(
        'currentUser',
        JSON.stringify(user)
      )

      localStorage.setItem(
        'Role',
        'currentUser'
      )

      navigate('/userhome')

    } else {

      alert('Invalid username or password')
      navigate('/Register')
    }
  }

  return (

    <div className="login-page">

      {/* LEFT SIDE */}

      <div className="login-left">

        <div className="overlay"></div>

        <div className="slider">

          <img
            src={images[index]}
            alt="shoe"
          />

          <button
            className="next-btn"
            onClick={nextSlide}
          >
            ›
          </button>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="login-right">

        <div className="login-box">

          <p className="small-text">
            PREMIUM SNEAKER STORE
          </p>

          <h1>
            Welcome Back
          </h1>

          <p className="subtitle">
            Login to explore premium sneakers,
            exclusive drops and modern streetwear.
          </p>

          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handlechange}
          />

          <div className="password-box">

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Password"
              name="password"
              onChange={handlechange}
            />

            <span
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? 'Hide' : 'Show'}
            </span>

          </div>

          <button
            className="login-btn"
            onClick={handleSubmit}
          >
            Login
          </button>

          <p className="register-link">
            Don’t have an account?
            <span
              onClick={() =>
                navigate('/Register')
              }
            >
              Register
            </span>
          </p>

        </div>

      </div>

    </div>
  )
}

export default Login