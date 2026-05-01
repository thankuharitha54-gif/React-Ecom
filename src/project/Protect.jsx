import React from 'react'
import { Navigate } from 'react-router-dom'

function Protect({children}) {
    const user=JSON.parse(localStorage.getItem('currentUser')) 
  return user ? children : <Navigate to='/Login'/>
}

export default Protect