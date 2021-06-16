import React from 'react';
import Booking from '../Booking/Booking';
const bookingData = [
    {
        id: 1,
        subject: 'Teeth Orthodontics',
        visitingHour: '08:00 AM to 09:00 AM',
        totalSpace: 10
    },
    {
        id: 2,
        subject: 'Cosmetic Dentistry',
        visitingHour: '09:00 AM to 10:00 AM',
        totalSpace: 10
    },
    {
        id: 3,
        subject: 'Teeth Cleaning',
        visitingHour: '10:00 AM to 11:00 AM',
        totalSpace: 10
    },
    {
        id: 4,
        subject: 'Cavity Protection',
        visitingHour: '12:00 PM to 01:00 PM',
        totalSpace: 10
    },
    {
        id: 5,
        subject: 'Teeth Orthodontics',
        visitingHour: '07:00 PM to 08:00 PM',
        totalSpace: 10
    },
    {
        id: 6,
        subject: 'Cosmetic Dentistry',
        visitingHour: '08:00 PM to 09:00 PM',
        totalSpace: 10
    }    
]
const BookAppointment = ({date}) => {
    return (
        <section className='appointment-container container text-center'>
            <h2 className='text-center' style={{color:'#17d3c2'}}>Available Appointment On {date.toDateString()}</h2>
            <div className='row my-5'>
            {
                bookingData.map(book => <Booking book={book} date={date} />)
            }
            </div>
        </section>
    );
};
export default BookAppointment;