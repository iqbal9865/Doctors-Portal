import React from 'react';
import patient1 from '../../../images/Ellipse 1.png'
import patient2 from '../../../images/Ellipse 2.png'
import patient3 from '../../../images/Ellipse 3.png'
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';
const testimonialData = [
    {
        name: 'Winson Harry',
        address: 'New York',
        img: patient1
    },
    {
        name: 'Selena Gomez',
        address: 'London',
        img: patient2
    },
    {
        name: 'Georgina Farnandez',
        address: 'Portugal',
        img: patient3
    }
]

const Testimonial = () => {
    return (
        <section className='testimonial-section mt-5'>
            <div className='container py-4'>
                <h4 style={{color:'#17d3c2',textAlign:'center'}}>Testimonial</h4>
                <h1 style={{textAlign:'center'}}>What Our Patient Says</h1>
                <div className='row my-5'>
                    {
                        testimonialData.map(testimonial => <TestimonialDetails testimonial={testimonial} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;