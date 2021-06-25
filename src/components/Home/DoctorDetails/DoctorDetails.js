import React from 'react';

const DoctorDetails = ({doctor}) => {
    console.log(doctor)
    return (
        <div className='col-md-4'>
            <div className='d-flex justify-content-center'>
                <img src={`http://localhost:5000/${doctor.file.name}`} alt="" className="img-fluid my-2" />
            </div>
            <div style={{textAlign: 'center'}}>
                <h4>{doctor.name}</h4>
                <p style={{color:'gray'}}>{doctor.email}</p>
            </div>
        </div>
    );
};

export default DoctorDetails;