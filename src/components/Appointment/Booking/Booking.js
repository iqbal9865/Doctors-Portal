import React from 'react';
import { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const Booking = ({book}) => {

    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  
    return (
        <div className='col-md-4 card p-3 mb-3'>
            <div className='card-title'>
                <h4 style={{color: '#17d3c2'}}>{book.subject}</h4>
            </div>
            <div >
                <h6>{book.visitingHour}</h6>
                <p className='text-secondary'>{book.totalSpace} Space Available</p>
            </div>
           <div>
            <button onClick={openModal} style={{padding:'11px 36px',backgroundColor:'#17d3c2', fontSize:'17px', fontWeight:'700',color:'white',border:'none'}}>Book Appointment</button>
            </div> 
            <AppointmentForm modalIsOpen={modalIsOpen} appointmentOn={book.subject} closeModal={closeModal}></AppointmentForm>
        </div> 
    );
};

export default Booking;