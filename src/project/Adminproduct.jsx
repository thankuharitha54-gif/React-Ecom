import React,{useState,useEffect} from 'react'
function Adminproduct() {
    
    const[items,setItem]=useState([])
    useEffect(()=>{
        let data= JSON.parse(localStorage.getItem('Products')) || []
        setItem(data)
    },[])


  const [product,setProduct]=useState({name:'',price:'',description:'',offer:''})
  const handlechange=(e)=>{
    setProduct({...product,[e.target.name]:e.target.value})
  }
  
  const handleSubmit=()=>{
    if(!product.name&&!product.price&&!product.description&&!product.offer){
      alert(' Add the product')
      return
    }
    let products =JSON.parse(localStorage.getItem('Products')) || []
    const exist=products.find(i=>i.name===product.name)
    if(exist){
      alert('product already added')
      return
    }
    
    products.push(product)
    localStorage.setItem('Products',JSON.stringify(products))
    alert('Product added successfully')
  }
  
  return (
      <div >
        <form>
          <h1>Product Cart</h1> 
      
       <input  type="text" placeholder='Product Name' name="name"  onChange={handlechange}/>
      <br></br>
      <input  type="text" placeholder='Price' name="price" onChange={handlechange}/>
      <br></br>
      <input  type="text" placeholder=' Description' name="description" onChange={handlechange}/>
      <br></br> 
      <input type="text" placeholder='Offer' name="offer" onChange={handlechange}/>
      <br></br>
      <button  onClick={handleSubmit}>Add product</button>
      </form>


       <h2>Product DashBoard</h2>

        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Offer</th>
            </tr>
          </thead>

      <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>{item.offer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      
    </div>
  )
}

export default Adminproduct

