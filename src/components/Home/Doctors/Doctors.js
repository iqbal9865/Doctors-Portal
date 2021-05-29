import React from 'react';
import doctor from '../../../images/5790-removebg.png'
import DoctorDetails from '../DoctorDetails/DoctorDetails';
const doctorDetails = [
    {
        name: 'Dr. Caudi',
        img: doctor,
        phone: '+523566778'
    },
    {
        name: 'Dr. Caudi',
        img: doctor,
        phone: '+523566778'
    },
    {
        name: 'Dr. Caudi',
        img: doctor,
        phone: '+523566778'
    }
]
const Doctors = () => {
    return (
        <section className='doctors-section'>
            <div className="container">
                <h4 style={{color: '#17d3c2', textAlign: 'center'}}>OUR DOCTORS</h4>
                <div className="row">
                    {
                        doctorDetails.map(doctor => <DoctorDetails doctor={doctor} ></DoctorDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;