import React,{useState,useEffect} from 'react'

function Addtocart() {

    const[product,setProduct]=useState([])

    useEffect(()=>{
        let user= JSON.parse(localStorage.getItem('loggeduser'))
        const cartproducts= JSON.parse(localStorage.getItem('Cart')) || []

        let usercart= cartproducts.filter(item=>item.user === user?.email)
        
        setProduct(usercart)
    },[])

    const removeItem=(index)=>{
        const updatedProducts = [...product]
        updatedProducts.splice(index,1)
        setProduct(updatedProducts)
        localStorage.setItem('Cart',JSON.stringify(updatedProducts))
        alert('Item removed from cart')
    }
    const total=product.reduce((sum,item)=>{
        return sum + Number(item.price)
    },0)

  return (
    <div >
        {product.length === 0 ? (
            <p>No products found</p>
        ) : (
            product.map((item,index) => (
                <div key={index} >
                    <h3>Product{item.name}</h3>
                    <p>Price₹:{item.price}</p>
                    <p>Description: {item.description}</p>
                    <p>Offer: {item.offer}</p>
                    <button onClick={() => removeItem(index)}>Remove</button>
                </div>
            ))
        )}
        <p>Total Amount: {total}</p>
    </div>
  )
}

export default Addtocart