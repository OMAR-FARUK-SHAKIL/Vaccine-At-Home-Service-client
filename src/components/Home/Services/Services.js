import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const Services = () => {
    const [serviceData,setServiceData] = useState([]);

    useEffect(() => {
        fetch("https://shrouded-thicket-71402.herokuapp.com/services")
          .then((res) => res.json())
          .then((data) => setServiceData(data));
      }, []);
    
console.log(serviceData);
    return (
        <section style={{backgroundColor:'#E7F7FA'}} className="services-container mt-5 p-5">
            <div className="text-center">
                <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
            {serviceData.length === 0 && (
                <div style={{textAlign: 'center'}}>       
                   <div class="spinner-border text-info" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <h1>Loading...</h1>
                </div>
             )}
                {
                    serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;