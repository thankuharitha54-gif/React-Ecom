import React, { useState, useEffect } from 'react';
import './adminhome.css'; // Assuming shared CSS, or create a new one if needed

function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('Orders')) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <div className="orders-container">
      <h2>All Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="order-card">
            <h3>Order ID: {order.id}</h3>
            <p>User: {order.user}</p>
            <p>Date: {order.date}</p>
            <p>Total: ${order.total}</p>
            <div>
              <h4>Items:</h4>
              {order.items.map((item, idx) => (
                <div key={idx}>
                  <p>{item.name} - ${item.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default AdminOrders;