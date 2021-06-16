import React from 'react';
// import { useState } from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root')

const AppointmentForm = ({modalIsOpen,closeModal,appointmentOn}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div>
             
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 className='text-center' style={{color:'#17d3c2'}}>{appointmentOn}</h2>
          {/* <button onClick={closeModal}>close</button> */}
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-group my-3'>
            <input className='form-control' placeholder='Enter Your Name' {...register("example", { required: true })} /> 
          </div>
          <div className='form-group my-3'>
            <input className='form-control' placeholder='Enter Your Phone' {...register("exampleRequired", { required: true })} /> 
            {errors.exampleRequired && <span>This field is required</span>}
          </div>
          <div className='form-group my-3'>
            <input className='form-control' placeholder='Enter Your Email' {...register("exampleRequired", { required: true })} /> 
            {errors.exampleRequired && <span>This field is required</span>}
          </div>
          <input type="submit" />
        </form>
        </Modal>
        </div>
    );
};

export default AppointmentForm;