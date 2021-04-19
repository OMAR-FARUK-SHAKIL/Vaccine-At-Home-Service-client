import React, { useEffect, useState } from 'react';

const AllOrders = () => {
    const [orders,setOrder] = useState([]);
    useEffect(() => {
        fetch('https://shrouded-thicket-71402.herokuapp.com/allOrders')
          .then((res) => res.json())
          .then((data) => setOrder(data));
      }, []);
    //   console.log("orders paici=",orders);
    return (
        <div className="mx-auto text-center">
            <h1>All orders yet now:</h1>
            {
                orders.length===0 && <h1>No orders yet</h1>
            }
            {
                orders.map(order =>
                    <div className='card mt-5 mb-5 mx-auto text-center' key={order._id}>
                        <h2>User : {order.email}</h2>
                        <h4>{order.name}</h4>
                        <h6>Service charge : {order.charge}</h6>
                        <p>Order date: {order.orderTime}</p>
                    </div>
                )
            }
        </div>
    );
};

export default AllOrders;