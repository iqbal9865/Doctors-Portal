import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';
// import AppointmentDataTable from '../AppointmentDataTable/AppointmentDataTable';
const AppointmentByDate = ({appointments}) => {
    return (
        <div>
            <h3 style={{color:'#17d3c2'}}>Appointments : {appointments.length}</h3>
            {
               appointments.length ? 
               <AppointmentShortList appointments={appointments} / > 
               : <div className='my-5'><h4 className='text-secondary'> No appointments for this date! </h4></div>
            }
        </div>
    );
};

export default AppointmentByDate;