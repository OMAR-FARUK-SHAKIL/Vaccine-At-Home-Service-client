import React, { useEffect, useState } from 'react';
import baby from '../../../images/baby.JPG';
import covid from '../../../images/covid.jpg';
import women from '../../../images/women.jpg';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

// const serviceData = [
//     {
//         name: 'Vaccine for baby at home',
//         img: baby
//     },
//     {
//         name: 'Vaccine for covid patient at home',
//         img: covid
//     },
//     {
//         name: 'Vaccine for pregnant women at home',
//         img: women
//     }
// ]

const Services = () => {
    const [serviceData,setServiceData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5500/services")
          .then((res) => res.json())
          .then((data) => setServiceData(data));
      }, []);
    
console.log(serviceData);
    return (
        <section className="services-container mt-5">
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