import React from 'react'
import Home from './project/Home'
import Register from './project/Register'
import Login from './project/Login'
import Protect from './project/Protect'
// import Adminnavbar from './project/adminnavbar'
import Usernavbar from './project/usernavbar'
import Adminproduct from './project/Adminproduct'
import Addtocart from './project/Addtocart'
import Userproduct from './project/Userproduct'
import Adminhome from './project/Adminhome'
import Userhome from './project/userhome'
import Adminuser from'./project/Adminuser'
import UserOrders from './project/UserOrders'
import AdminOrders from './project/AdminOrders'
import Checkout from './project/checkout'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
function App() {
  const role = localStorage.getItem('Role')
  return (
    <BrowserRouter>
    {role==='Admin'?<Adminhome/>:role==='currentUser'?<Usernavbar/>:null}
     {/* <nav align='right'> 
       <button><Link to ='/'>Home</Link></button>
   <button><Link to ='/Register'>Register</Link></button>
     <button><Link to ='/Login'>Login</Link></button>
      </nav> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
       <Route path='/Register' element={<Register/>}/>
       <Route path='/Login' element={<Login/>}/>
        <Route path='/Adminproduct' element={<Adminproduct/>}/>
        <Route path='/Userproduct' element={<Userproduct/>}/>
        <Route path='/Addtocart' element={<Addtocart/>}/>
        <Route path='/Adminhome' element={<Adminhome/>}/>
        <Route path="dashboard" element={<Adminuser />} />
        <Route path="products" element={<Adminproduct />} />
        <Route path="orders" element={<h2>No Orders Yet</h2>} />
  
        <Route path='/Userhome' element={<Userhome/>}/>
        <Route path='/Adminuser' element={<Adminuser/>}/>
        <Route path='/UserOrders' element={<UserOrders/>}/>
        <Route path='/AdminOrders' element={<AdminOrders/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/Shop' element={<Userproduct/>}/>  
      </Routes>
      </BrowserRouter>
  
    
  )
}

export default App