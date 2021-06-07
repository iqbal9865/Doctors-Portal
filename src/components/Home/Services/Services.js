import React from 'react';
import fluoride from '../../../../src/images/flouride.png'
import filling from '../../../../src/images/filling.png'
import whitening from '../../../../src/images/whitening.png'
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import './Services.css'
const ServicesData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        img: filling
    },
    {
        name: 'Teeth Whitening',
        img: whitening
    }
]

const Services = () => {
    return (
       <section  className='text-center mt-5 mx-4 service-section'>
           <div>
                <h4 style={{color:'#17d3c2'}}>OUR SERVICES</h4>
                <h1 style={{color:'#3A4256'}}>Services We Provide</h1>
           </div>

           <div className='d-flex justify-content-center'>
               <div  className='row my-5'>
                    {
                        ServicesData.map(service => <ServiceDetails service={service}></ServiceDetails>)
                    }
               </div>
           </div>
       </section>
    );
};

export default Services;