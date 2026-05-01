import React,{useState,useEffect} from 'react'

function Userproduct() {
    const[product,setProduct]=useState([])

    useEffect(()=>{
        const storedproducts= JSON.parse(localStorage.getItem('Products')) || []
        setProduct(storedproducts)
    })
    const addtocart=(product)=>{
        let user= JSON.parse(localStorage.getItem('loggeduser')) || []
        let cart= JSON.parse(localStorage.getItem('Cart')) || []
        let newitem={
            ...product,
            user:user.email
        }
        cart.push(newitem)
        localStorage.setItem('Cart',JSON.stringify(cart))
        alert('Product added to cart')
    }
       

  return (
    <div >
        {product.length === 0 ? (
            <p>No products found</p>
        ) : (
            product.map((item,index) => (
                <div key={index} >
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                    <p>{item.description}</p>
                    <p>{item.offer}</p>
                    <button onClick={()=>addtocart(item)}>Add to cart</button>
                    
                </div>
            ))
        )}
    </div>
  )
}

export default Userproduct