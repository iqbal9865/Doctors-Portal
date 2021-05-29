import React from 'react';
import './MakeAppointment.css';
import doctor from '../../../images/5790-removebg.png' 
const MakeAppointment = () => {
    return (
        <section className='make-appointment mt-5'>
            <div className='container'>
                <div className='row p-3 pt-5'>
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt='' className='img-fluid' />
                    </div>
                    <div className="col-md-7 pt-5 text-white">
                        <h5 style={{color: '#17d3c2'}}>APPOINTMENT</h5>
                        <h1 className='my-3'>Make An Appointment <br/> Today</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, necessitatibus. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit. </p>
                        <button style={{padding:'11px 36px',backgroundColor:'#17d3c2', fontSize:'17px', fontWeight:'700',color:'white',border:'none'}}>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;