import React from 'react'
import { useNavigate } from 'react-router-dom'

function Usernavbar() { 
     const navigate = useNavigate()
    const handlelogout=()=>{
        localStorage.removeItem('Role')
        navigate('/Login')
    }
  return (
    <div>
       {/* <nav>
        <a href='/Userproduct'>Collection</a>
        <a href='/Addtocart'>Add to cart</a>
        <a href='/profile'>profile</a> */}
        {/* <button  onClick={handlelogout}>logout</button> */}

       {/* </nav> */}
    </div>
  )
}

export default Usernavbar