import React from 'react';
// import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          {/* <img id='logo' style={{width:'80px'}} className='img-fluid' src={logo} alt="" /> */}
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav w-100 justify-content-end nav flex-column">
            <li>
                    <Link  style={{textDecoration:'none'}} to="/doctor/dashboard" className="text-white">
                        <span style={{color:'blue'}}>Dashboard</span> 
                    </Link>
                </li>
                <li>
                    <Link style={{textDecoration:'none'}} to="/doctor/appointment" className="text-white">
                         <span style={{color:'blue'}}>Appointment</span> 
                    </Link>
                </li>
                <li>
                    <Link  style={{textDecoration:'none'}} to="/doctor/prescriptions" className="text-white">
                       <span style={{color:'blue'}}>Prescriptions</span>
                    </Link>
                </li>
              
                <li>
                    <Link  style={{textDecoration:'none'}} to="/doctor/patients" className="text-white">
                        <span style={{color:'blue'}}>Patients</span>
                    </Link>
                </li>
               
                <li>
                    <Link  style={{textDecoration:'none'}} to="/doctor/addDoctor" className="text-white">
                        <span style={{color:'blue'}}>Add Doctor</span>
                    </Link>
                </li>
                <li>
                    <Link  style={{textDecoration:'none'}} to="/doctor/setting" className="text-white" >
                       <span style={{color:'blue'}}>Settings</span>
                    </Link>
                </li>
               
            </ul>
            
          </div>
        </div>
      </nav>
    );
};

export default About;