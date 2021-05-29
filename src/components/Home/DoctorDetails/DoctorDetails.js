import React from 'react';

const DoctorDetails = ({doctor}) => {
    return (
        <div className='col-md-4'>
            <div>
                <img src={doctor.img} alt="" className="img-fluid my-2" />
            </div>
            <div style={{textAlign: 'center'}}>
                <h4>{doctor.name}</h4>
                <p style={{color:'gray'}}>{doctor.phone}</p>
            </div>
        </div>
    );
};

export default DoctorDetails;