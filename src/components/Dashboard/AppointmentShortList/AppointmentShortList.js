import React from 'react';

const AppointmentShortList = ({appointments}) => {
    return (
        <div>
            <table className='table table-borderless my-4'>
                <thead>
                    <tr className='text-justify'>
                        <th className='text-secondary'>Name</th>
                        <th className='text-secondary'>Phone No.</th>
                        <th className='text-secondary'>Email Address</th>
                    </tr>
                </thead>
                <tbody>
                {
                  appointments.map((appointment, index) => 
                        
                    <tr className='text-justify'>
                        <td>{appointment.name}</td>
                        <td>{appointment.phone}</td>
                        <td>{appointment.email}</td>
                    </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    );
};

export default AppointmentShortList;