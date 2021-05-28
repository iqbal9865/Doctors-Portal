import React from 'react';
import InfoCard from '../InfoCard/InfoCard';

import { faClock,  faMapMarkerAlt, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'
const infoData = [
    {
        title:'Opening Hours',
        descriptions: 'We are Open 24/7 Hours',
        icon: faClock,
        bgColor: 'primary'
    },
    {
        title:'Visit Our location',
        descriptions: 'JindaBazar, Sylhet-3106',
        icon: faMapMarkerAlt,
        bgColor: 'dark'
    },
    {
        title:'Call Us Now',
        descriptions: '01755-837019',
        icon: faPhoneSquareAlt,
        bgColor: 'primary'
    }
]

const BusinessInfo = () => {
    return (
     <section className='d-flex justify-content-center'>
        <div style={{width:'85%'}} className='row'>
            {
                infoData.map(info => <InfoCard info={info}></InfoCard> )
            }
        </div>
     </section>
    );
};

export default BusinessInfo;