import React from 'react';
import {useState} from 'react';
import Navbar from '../../Home/Navbar/Navbar'
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader'
import Footer from '../../Home/Footer/Footer'
import BookAppointment from '../BookAppointment/BookAppointment';
const Appointment = () => {

    const [selectedDate, setSelectedDate] = useState(new Date())

    const handleDateChange = (date) => {
        setSelectedDate(date)
    }
    return (
        <div>
           <Navbar></Navbar>
           <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
           <BookAppointment date={selectedDate}></BookAppointment>
           <Footer></Footer>
        </div>
    );
};

export default Appointment;