import React from 'react';
import chair from '../../../images/chair.png'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
const AppointmentHeader = ({handleDateChange}) => {

    return (
        <main className='row d-flex align-items-center my-5'>
            
            <div className="col-md-5 offset-md-1 d-flex justify-content-center my-3">
            
            <Calendar 
            onChange={handleDateChange}
            value={new Date()}
            />
        </div>
        <div className="col-md-5">
            <img src={chair} alt="" className="img-fluid" />
        </div>
    </main>
    );
};
export default AppointmentHeader;