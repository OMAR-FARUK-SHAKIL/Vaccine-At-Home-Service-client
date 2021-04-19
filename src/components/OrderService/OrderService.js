import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import ProcessPayment from './ProcessPayment';


const OrderService = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders,setOrder] = useState([]);
    useEffect(() => {
        fetch(`https://shrouded-thicket-71402.herokuapp.com/orders/${loggedInUser.email}`)
          .then((res) => res.json())
          .then((data) => setOrder(data));
      }, [loggedInUser]);
      console.log('loggedUser=', loggedInUser);

    return (
        <div className="text-center">
            {orders.length ?
           <div>
                <h2>Your orders:</h2>
               <h4>{orders[0].name}</h4>
               <h5> --price : {orders[0].charge} </h5>
               <p> orderDate : {orders[0].orderTime}</p><br/><hr/><br/>
                <ProcessPayment></ProcessPayment> 
           </div>
               
            :
            <div>
                <h2>You order not recorded correctly. please try again later.</h2>
            </div>
}
               
         </div>
    );
};

export default OrderService;