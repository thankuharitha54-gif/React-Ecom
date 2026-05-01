import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [user,setUser]=useState({username:'',password:''})
    const navigate = useNavigate()
      const handlechange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
      }
      const handleSubmit=()=>{
        const adminmail ='admin@gmail.com'
        const adminpass ='admin123'
        if(!user.username&&!user.password){
          alert('Please fill the details')
          return
        }
        if(user.username===adminmail && user.password===adminpass){
          localStorage.setItem('Role','Admin')
          alert('Login Sucessfully!!!🪼')
          navigate('/Admin')
          return
        }
        let users =JSON.parse(localStorage.getItem('users')) || []
        const exist=users.find(i=>i.username===user.username && i.password===user.password)
        if(exist){
          localStorage.setItem('currentUser',JSON.stringify(user))
          localStorage.setItem('Role','currentUser')
          alert('Login Sucessfully!!!🪼')
          navigate('/Dashboard')
          return
        }
        else{
          alert('Invalid username or password')
          navigate('/Register')
        }
    }
  return (
    <div>
      
     <div > Username <input type="text" placeholder=' Enter the Username' name="username" onChange={handlechange}/><br></br></div>
      <div>Password <input type="password" placeholder=' Enter the Password' name="password" onChange={handlechange}/><br></br></div>
      <button onClick={handleSubmit} >Login</button><br></br>
        </div>
        
        
  )
}

export default Login