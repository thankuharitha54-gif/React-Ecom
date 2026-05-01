import React from 'react'
import './home.css'


function Home() {
  return (
    <div className='home-container'>
      <div className='home-content'>
        <h1 >WELCOME!</h1>
        <p >Create your account to access all features and services.</p>
      </div>
  
     <div className='home-actions'>
       <button className='btn signup'><a href='/Register'>Sign Up</a></button>
       <span>OR</span>
       <h4 >Already have an account?</h4>
       <button className='btn login'><a href='/Login'>Login</a></button>
     </div>
     </div>
    
     
        
        
        
  )
}

export default Home