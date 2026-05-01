import React from 'react'
import { useNavigate } from 'react-router-dom'

function Adminnavbar() {
    const navigate = useNavigate()
    const handlelogout = () => {
        localStorage.removeItem('Role')
        navigate('/Login')
    }
  return (
    <div>adminnavbar
        <nav>
            <a href='/Adminproduct'>Product</a>
            <a href='/user'>User</a>
            <a href='/order'>Order</a>
            <button className='logout-btn' onClick={handlelogout}>logout</button>

        </nav>
    </div>
    
  )
}

export default Adminnavbar