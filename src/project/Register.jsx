import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.css'

function Register() {
  const [user, setUser] = useState({ name: '', username: '', email: '', password: '' })
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
    const exist = users.find(i => i.email === user.email)

    if (exist) {
      alert('User already exists')
      return
    }

    users.push(user)
    localStorage.setItem('users', JSON.stringify(users))
    alert('Registration successful')
    navigate('/Login')
  }

  return (
    <div className='register-container'>

      <h2 className='title'>Trending Collections</h2>
      <div className='card-section'>

        <div className='card'>
          <img src='https://i.pinimg.com/1200x/b5/74/ac/b574ac42c3ca6f350e454443db7dffca.jpg' />
          <h4>Floral Dress</h4>
          
        </div>

        <div className='card'>
          <img src='https://i.pinimg.com/webp/1200x/00/8f/f9/008ff93cb19eee38e8290b813c0fd94e.webp' />
          <h4>Party Wear</h4>
        </div>

        <div className='card'>
          <img src='https://i.pinimg.com/736x/52/96/d7/5296d7ec08caa8cef00855014b2126e7.jpg' />
          <h4>Casual Fit</h4>
        </div>
        <div className='card'>
          <img src='https://i.pinimg.com/736x/6e/64/5a/6e645a6aca66c049948ce5fa9087fed8.jpg' />
          <h4>Summer Vibes</h4>
        </div>

        <div className='card'>
          <img src='https://i.pinimg.com/736x/46/f1/71/46f1718bc2ca0d7a0c819f695d1f193c.jpg' />
          <h4>Winter wear</h4>
        </div>


      </div>

      <form className='form' onSubmit={handleSubmit}>
        <h1>Create Your Account</h1>

        <input type="text" placeholder='Name' name="name" onChange={handlechange} />
        <input type="text" placeholder='Username' name="username" onChange={handlechange} />
        <input type="email" placeholder='Email' name="email" onChange={handlechange} />
        <input type="password" placeholder='Password' name="password" onChange={handlechange} />

        <button type='submit'>Register</button>
      </form>

    </div>
  )
}

export default Register