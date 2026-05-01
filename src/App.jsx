import React from 'react'
import Home from './project/Home'
import Register from './project/register'
import Login from './project/Login'
import Dashboard from './project/Dashboard'
import Admin from './project/Admin'
import Protect from './project/Protect'
import Adminnavbar from './project/adminnavbar'
import Usernavbar from './project/usernavbar'
import Adminproduct from './project/Adminproduct'
import Addtocart from './project/Addtocart'
import Userproduct from './project/Userproduct'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
function App() {
  const role = localStorage.getItem('Role')
  return (
    <BrowserRouter>
    {role==='Admin'?<Adminnavbar/>:role==='currentUser'?<Usernavbar/>:null}
     {/* <nav align='right'> 
       <button><Link to ='/'>Home</Link></button>
   <button><Link to ='/Register'>Register</Link></button>
     <button><Link to ='/Login'>Login</Link></button>
      </nav> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
       <Route path='/Register' element={<Register/>}/>
       <Route path='/Login' element={<Login/>}/>
       <Route path='/Dashboard' element={<Protect><Dashboard/></Protect>}/>
        <Route path='/Admin' element={<Admin/>}/>
        <Route path='/Adminproduct' element={<Adminproduct/>}/>
        <Route path='/Userproduct' element={<Userproduct/>}/>
        <Route path='/Addtocart' element={<Addtocart/>}/>

      </Routes>
      </BrowserRouter>
  
    
  )
}

export default App