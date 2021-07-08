import React,{useState, useEffect} from 'react';
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';


const Testimonial = () => {
    const [testimonialData,setTestimonialData] = useState([])
    useEffect( () => {
        fetch('https://royal-syrup-45263.herokuapp.com/allReviews')
        .then(res => res.json())
        .then(data => setTestimonialData(data))
    },[])
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