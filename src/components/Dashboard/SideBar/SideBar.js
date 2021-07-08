import React,{useState, useContext, useEffect} from 'react';
import './SideBar.css'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';
const SideBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [isDoctor, setIsDoctor] = useState(false)
    useEffect(() => {
        fetch('https://royal-syrup-45263.herokuapp.com/isDoctor', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({email : loggedInUser.email})
        })
        .then(response => response.json())
        .then(data => setIsDoctor(data))
    }, [])
    return (
        <nav style={{width:'40vh'}} class="navbar navbar-expand-lg navbar-light col-md-2">

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse sidebar px-5 " id="navbarSupportedContent">
            <ul class="navbar-nav justify-content-end nav flex-column">
                <li className='nav-item'>
                    <Link  style={{textDecoration:'none'}} to="/addReview" className="text-white nav-link my-3">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Add Review</span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link style={{textDecoration:'none'}} to="/appointment" className="text-white nav-link my-3">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span>  
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link  style={{textDecoration:'none'}} to="/doctor/prescriptions" className="text-white nav-link my-3">
                        <FontAwesomeIcon icon={faFileAlt} /> <span> Prescriptions</span>
                    </Link>
                </li>
                {isDoctor && <div>
                <li className='nav-item'>
                    <Link  style={{textDecoration:'none'}} to="/doctor/patients" className="text-white nav-link my-3">
                        <FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
                    </Link>
                </li>
               
                <li className='nav-item'>
                    <Link  style={{textDecoration:'none'}} to="/doctor/addDoctor" className="text-white nav-link my-3">
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Add Doctor</span> 
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link  style={{textDecoration:'none'}} to="/doctor/setting" className="text-white nav-link my-3" >
                      <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
                    </Link>
                </li>
                </div>}
            

                <li className='nav-item'>
                <Link  style={{textDecoration:'none'}} to="/" className="text-white nav-link my-3"><FontAwesomeIcon icon={faSignOutAlt} /> <span> Logout </span></Link>
                </li>
            </ul>
        </div>
        </nav>
    );
};

export default SideBar;