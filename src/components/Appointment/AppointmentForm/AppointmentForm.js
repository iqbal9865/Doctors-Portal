import React from 'react';

import Modal from 'react-modal';
import { useForm } from "react-hook-form";
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      padding               : '60px'
    }
};
Modal.setAppElement('#root')

const AppointmentForm = ({modalIsOpen,closeModal,appointmentOn,date}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data =>{ 

    date.service = appointmentOn;
    data.date = date;
    data.created = new Date();

    fetch('https://royal-syrup-45263.herokuapp.com/addAppointment', {
    method : 'POST',
    headers: {'content-type':'application/json'},
    body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(success => {
      if(success) {
        closeModal()
        alert('Appointment Created Successfully!');
      }
    })
  };
    return (
        <div>
             
        <Modal 
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 className='text-center' style={{color:'#17d3c2'}}>{appointmentOn}</h2>
          <p className='text-center text-secondary'><strong>ON {date.toDateString()}</strong></p>
          {/* <button onClick={closeModal}>close</button> */}
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-group my-3'>
            <input className='form-control' placeholder='Enter Your Name' {...register("name", { required: true })} /> 
            {errors.name && <span className="text-danger">This field is required</span>}
          </div>
          <div className='form-group my-3'>
            <input className='form-control' placeholder='Enter Your Phone' {...register("phone", { required: true })} /> 
            {errors.phone && <span className="text-danger">This field is required</span>}
          </div>
          <div className='form-group my-3'>
            <input type='email' className='form-control' placeholder='Enter Your Email' {...register("email", { required: true })} /> 
            {errors.email && <span className="text-danger">This field is required</span>}
          </div>
          
          <div className='form-group row my-3'>
            <div className='col-4'>
            <select name="gender" id="" className='form-control'  {...register("gender", { required: true })}>
                <option value="Not set"> Select Gender </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Not set">Other</option>
            </select>
            {errors.gender && <span className="text-danger">This field is required</span>}

            </div>
            <div className="col-4">
                <input  className="form-control" name="age" placeholder="Your Age" type="number" {...register("age", { required: true })} />
                {errors.age && <span className="text-danger">This field is required</span>}
            </div>
            <div className="col-4">
                <input  className="form-control" name="weight" placeholder="Weight" type="number" {...register("weight", { required: true })} />
                {errors.weight && <span className="text-danger">This field is required</span>}
            </div>

          </div>
        <input style={{padding:'11px 36px',backgroundColor:'#17d3c2', fontSize:'17px', fontWeight:'700',color:'white',border:'none'}} type="submit" />
        </form>
        </Modal>
        </div>
    );
};
export default AppointmentForm;