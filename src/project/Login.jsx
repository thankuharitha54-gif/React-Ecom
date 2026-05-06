import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'

function Login() {
  const [user, setUser] = useState({ username: '', password: '' })
  const [index, setIndex] = useState(0)
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const images = [
    "https://i.pinimg.com/1200x/27/e0/e5/27e0e50e0f1a968d58c0a2898a7158db.jpg",
    "https://i.pinimg.com/1200x/8a/78/a3/8a78a3f553de94076a91dd11366d99c6.jpg",
    "https://i.pinimg.com/736x/26/30/2d/26302d2edb81db72c147e7e8cc9ea671.jpg",
    "https://i.pinimg.com/736x/9b/06/f3/9b06f3fa8cc60376c8dd1baa1a7e5394.jpg",
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

    if (user.username === adminmail && user.password === adminpass) {
      localStorage.setItem('Role', 'Admin')
      navigate('/Adminhome')
      return
    }

    let users = JSON.parse(localStorage.getItem('users')) || []
    const exist = users.find(
      i => i.username === user.username && i.password === user.password
    )

    if (exist) {
      localStorage.setItem('currentUser', JSON.stringify(user))
      localStorage.setItem('Role', 'currentUser')
      navigate('/userhome')
    } else {
      alert('Invalid username or password')
      navigate('/Register')
    }
  }

  return (
    <div className="login-container">

      {/* LEFT SIDE */}
      <div className="login-left">

        <h1 className="title">
          Log in to explore trending outfits,
          curated styles & exclusive deals ✨
        </h1>

        <div className="form-box">
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handlechange}
          />

          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handlechange}
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          <button onClick={handleSubmit}>Login</button>

          <p className="link">
            Don't have an account? <a href="/Register">Register</a>
          </p>
        </div>

      </div>

      {/* RIGHT SIDE SLIDER */}
      <div className="login-right">
        <div className="slider">
          <img src={images[index]} alt="fashion" />
          <button className="next" onClick={nextSlide}>›</button>
        </div>
      </div>

    </div>
  )
}

export default Login