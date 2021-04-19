import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`



const ServiceDetail = ({ service }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    

    const orderUpload = () => {
        console.log('click successful');
        const orderInfo = {
            ...loggedInUser,
            name: service.name,
            charge: service.price,
            orderTime: new Date()
        };
        fetch("http://localhost:5500/orderService", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderInfo)
    })
      .then((response) => response.json())
      .then((data) => {
       console.log('wow=',data)
      });
    }

    return (
       
        <div className="col-md-4 col-sm-6 col-xs-12 text-center">
              <animated.div
        
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
        > 
                <img style={{height: '150px',width: '250px'}} src={service.imageURL} alt="" />
        </animated.div>
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <p className="text-secondary"> {service.description}</p>
            <p>charge: {service.price} Tk.</p>
            <Link to="orderAService" ><button onClick={orderUpload} className="btn-primary">Place Order</button></Link>
           
        </div>
       
       
    );
};

export default ServiceDetail;