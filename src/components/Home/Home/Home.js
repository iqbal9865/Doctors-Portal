import React from 'react';
import Services from '../Services/Services';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import FeatureServices from '../FeatureServices/FeatureServices';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonial from '../Testimonial/Testimonial';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeatureServices />
            <MakeAppointment />
            <Testimonial />
            <Blogs />
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;