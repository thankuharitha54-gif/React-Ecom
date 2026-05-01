import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'



function Register() {
  const [user,setUser]=useState({name:'',username:'',email:'',password:''})
  const navigate = useNavigate()
  const handlechange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }
  const handleSubmit=()=>{
    if(!user.name&&!user.username&&!user.email&&!user.password){
      alert('Please fill the details')
      return
    }
    let users =JSON.parse(localStorage.getItem('users')) || []
    const exist=users.find(i=>i.email===user.email)
    if(exist){
      alert('User already exists')
      return
    }
    
    users.push(user)
    localStorage.setItem('users',JSON.stringify(users))
    alert('Registration successful')
    navigate('/Login')
  }
  return (
      <div >
        <form >
          <h1 >Create Your Account</h1> 
      
       <input  type="text" placeholder=' Name' name="name"  onChange={handlechange}/>
      <br></br>
      <input   type="text" placeholder=' Username' name="username" onChange={handlechange}/>
      <br></br>
      <input type="email" placeholder=' Email' name="email" onChange={handlechange}/>
      <br></br> 
      <input type="password" placeholder='Password' name="password" onChange={handlechange}/>
      <br></br>
      <button onClick={handleSubmit} >Register</button>
      </form>
    </div>
  )
}

export default Register

