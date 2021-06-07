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
          <input {...register("example")} /> <br /> <br />
          <input {...register("exampleRequired", { required: true })} /> <br /> <br />
          {errors.exampleRequired && <span>This field is required</span>}
          <input type="submit" />
        </form>
        </Modal>
        </div>
    );
};

export default AppointmentForm;