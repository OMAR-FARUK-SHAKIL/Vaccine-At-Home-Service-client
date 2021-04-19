import React, { useEffect, useState } from 'react';

const AllServices = () => {

    const [services, setServices] = useState([]);
  
  useEffect(()=>{
    fetch("https://shrouded-thicket-71402.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
   
    }, [])


    const deleteProduct = (id) => {
        console.log(id);
       fetch(`https://shrouded-thicket-71402.herokuapp.com/delete/${id}`, {
         method: "DELETE",
       })
         .then((res) => res.json())
         .then((result) => {
             alert('deleted successfully,Reload please!');
           console.log("deleted successfully!!");
        const remainProduct = services.filter(product=>product._id!==id);
        setServices(remainProduct);
         });
     };


    return (
        <div>
            <div className="bg-grey mt-5 p-5 text-center">
                 {services.length === 0 && (
                     <h1>Loading...</h1>      
                  )} 
                 { services.map(item =>
                     <div className="container w-70 justify-content-center text-center mt-2 mb-4 p-3 bg-warning bg-gradient">
                      <h3>{item.name}</h3>
                      <small>{item.description}</small>
                        <p>Service Charge : {item.price} Tk.</p>
                     <button onClick={()=>deleteProduct(item._id)}>Delete</button>
                     </div>
                  )}
            
            </div> 
        </div>
    );
};

export default AllServices;