import React, { useEffect,useState } from 'react';
import './AllPatients.css'
import SideBar from '../Dashboard/SideBar/SideBar';
import AppointmentDataTable from '../Dashboard/AppointmentDataTable/AppointmentDataTable'
const AllPatients = () => {
    const [appointments, setAppointment] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/appointments')
        .then(res => res.json())
        .then(data => setAppointment(data))
    })
    return (
        <div className="row" >
        <div className='col-md-2'>
            <SideBar></SideBar>
        </div>
       
        <div className="col-md-9 mx-5 patient" style={{ right: 0, backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand my-2">All Patients</h5>
            <AppointmentDataTable appointments={appointments} />
        </div>
    </div>
    );
};

export default AllPatients;