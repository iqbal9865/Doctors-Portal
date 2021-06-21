import React,{useState,useEffect} from 'react';
import SideBar from '../SideBar/SideBar'
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [appointments, setAppointments] = useState([])
    const handleDateChange = (date) => {
        setSelectedDate(date)
    }
    useEffect(() => {
        fetch('http://localhost:5000/appointmentsByDate', {
            method: 'POST',
            headers: { 
                'content-type':'application/json'
            },
            body: JSON.stringify({date: selectedDate})
        })
        .then(res => res.json())
        .then(data => setAppointments(data))

    },[selectedDate])
    return (
        <section style={{backgroundColor: '#F4FDFB',height: '100%'}} className=' row'>
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-5 my-5 d-flex justify-content-center">
            <Calendar 
            onChange={handleDateChange}
            value={new Date()}
            />
            </div>
            <div className="col-md-5 my-3">
                <AppointmentByDate appointments={appointments}></AppointmentByDate>
            </div>
        </section>
    )
}
export default Dashboard;