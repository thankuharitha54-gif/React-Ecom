import React,{useState,useEffect} from 'react'

function Checkout() {
    const[cartitems,setCartitems]=useState([])

    const user = JSON.parse(localStorage.getItem('currentUser'))

    if (!user) {
        return <p>Please log in to proceed to checkout.</p>
    }

    useEffect(()=>{
        const storedproducts=JSON.parse(localStorage.getItem('Cart')) || []
        setCartitems(storedproducts)
    },[])
    
    const mycart=cartitems.filter(item=>item.user===user.email)

        const total=mycart.reduce((sum,item)=>{
            return sum+Number(item.price)
        },0)
        const handlepayment =()=>{
            let allcarts=JSON.parse(localStorage.getItem('Cart')) || []
            const balancecart= allcarts.filter(item=>item.user!==user.email)

            localStorage.setItem('Cart',JSON.stringify(balancecart))

            alert('Payment Successful')
            setCartitems([])
                }
    
  return (
    <div>
        <h2>Checkout</h2>
        {mycart.length===0?(
            <p>NO PRODUCTS FOUND</p>
        ):(
            mycart.map((item,index)=>(
                <div>
                    <h3>{item.name}</h3>
                    <h3>{item.description}</h3>
                    <h3>{item.offer}</h3>
                    <p>{item.price}</p>
                </div>
            ))
        )}
        <p>Total: ${total.toFixed(3)}</p>
        <button onClick={handlepayment}>Pay Now</button>

    </div>
  )
}

export default Checkout