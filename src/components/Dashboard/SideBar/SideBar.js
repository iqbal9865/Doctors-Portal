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
        fetch('http://localhost:5000/isDoctor', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({email : loggedInUser.email})
        })
        .then(response => response.json())
        .then(data => setIsDoctor(data))
    }, [])
    return (
        
        <div style={{height:"100vh"}} className='py-5 px-4 sidebar d-flex flex-column justify-content-between col-md-2'>
            <ul className="list-unstyled">
                <li>
                    <Link  style={{textDecoration:'none'}} to="/doctor/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span> 
                    </Link>
                </li>
                <li>
                    <Link style={{textDecoration:'none'}} to="/doctor/appointment" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span> 
                    </Link>
                </li>
                <li>
                    <Link  style={{textDecoration:'none'}} to="/doctor/prescriptions" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
                    </Link>
                </li>
                {isDoctor && <div>
                <li>
                    <Link  style={{textDecoration:'none'}} to="/doctor/patients" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
                    </Link>
                </li>
               
                <li>
                    <Link  style={{textDecoration:'none'}} to="/doctor/addDoctor" className="text-white">
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Add Doctor</span>
                    </Link>
                </li>
                <li>
                    <Link  style={{textDecoration:'none'}} to="/doctor/setting" className="text-white" >
                      <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
                    </Link>
                </li>
                </div>}
            </ul>

            <div>
                <Link  style={{textDecoration:'none'}} to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>

        </div>
    );
};

export default SideBar;