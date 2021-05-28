import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './InfoCard.css'
const InfoCard = (props) => {
    console.log(props)
    const {title, descriptions, icon, bgColor} = props.info;
    return (
        <div className="col-md-4 text-white">
            <div className={`d-flex my-1 justify-content-center info-container info-${bgColor}`}>
                <div className=''>
                    <FontAwesomeIcon className='info-icon mx-3' icon={icon}></FontAwesomeIcon>
                </div>
                <div>
                    <h5>{title}</h5>
                    <p>{descriptions}</p>
                </div>
            </div>
            
        </div>
    );
};

export default InfoCard;