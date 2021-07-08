import React from 'react';

const TestimonialDetails = ({testimonial}) => {
    console.log('data found ',testimonial)
    return (
        
        <div style={{width:'22rem', boxSizing: 'border-box'}} className='col-md-4 card m-2 m-auto my-2'>
            
            <p style={{textAlign: 'justify'}} className='p-4'>{testimonial.review}</p>
            <div className='d-flex px-2'>
                <div>
                    <img src={testimonial.img} className='img-fluid' alt="" />
                </div>
                <div className='p-3'>
                    <h5 style={{color:'#17d3c2'}}>{testimonial.name}</h5>
                    <h6>{testimonial.address}</h6>
                </div>
            </div>
            
        </div>
    );
};

export default TestimonialDetails;