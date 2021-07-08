import React,{useState} from 'react';
import SideBar from '../Dashboard/SideBar/SideBar'
import { useForm } from "react-hook-form";

const AddDoctor = () => {

    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null)

    const fileChange  = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile)
    }
    const handleBlur = (e) => {
        console.log(e.target.value)
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('email', info.email)

        fetch('https://royal-syrup-45263.herokuapp.com/addADoctor', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
    };
        
    return(
        <div className='row'>
            <div className='col-md-2'>
                <SideBar />
            </div>
           
            <div className="col-md-8 p-5">
                <h4 className='px-2'>Add Doctor</h4>

                <form className='px-2' onSubmit={handleSubmit(onSubmit)}>

                    <div className='form-group py-4'>
                    <input onBlur={handleBlur} placeholder='Enter Name' type="text" className="form-control" required name='name' />
                    {errors.name && <span style={{color:'red'}}>This field is required</span>} <br />

                    <input onBlur={handleBlur}  placeholder='Email Address' type="email" className="form-control" required name='email' />
                    {errors.email && <span style={{color:'red'}}>This field is required</span>} <br/>

                    <input onChange={fileChange} placeholder='Upload Image' type="file" className="form-control" required name='image' />
                    {errors.image && <span style={{color:'red'}}>This field is required</span>} <br/>

                    <input style={{padding:'11px 36px',backgroundColor:'#17d3c2', fontSize:'17px', fontWeight:'700',color:'white',border:'none'}} type='submit' value='SUBMIT' />
                    </div>
                
                </form>
            </div>
        </div>
    )
}
export default AddDoctor;