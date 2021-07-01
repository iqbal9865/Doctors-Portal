import React from 'react';
import './About.css'
import Services from '../Home/Services/Services'
import Navbar from '../Home/Navbar/Navbar'
import Doctors from '../Home/Doctors/Doctors'
const About = () => {
    return (
       <div>
           <Navbar />
           <Services />
           <Doctors />
       </div>
    );
};

export default About;