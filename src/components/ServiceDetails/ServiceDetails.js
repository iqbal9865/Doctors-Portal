import React from 'react';
import './ServiceDetails.css'
const ServiceDetails = (props) => {
    const {name, img} = props.service;
    return (
        <div className='col-md-4'>
            <img style={{width:'60px'}} src={img} alt="" className="img-fluid" />
            <h3>{name}</h3>
            <p style={{textAlign:'justify', color:'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente necessitatibus quaerat odio? Blanditiis sit harum asperiores. Sapiente magnam quas aliquam, neque aliquid dolorum vel temporibus iure asperiores velit nihil</p>
        </div>
    );
};

export default ServiceDetails;