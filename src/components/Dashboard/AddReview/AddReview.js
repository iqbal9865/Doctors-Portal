import React,{useState} from 'react';
import { useForm } from "react-hook-form";
import SideBar from '../SideBar/SideBar';
const axios = require('axios').default;
const AddReview = () => {
    const [imageURL, setImageURL] = useState(null)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        
        const eventData = {
            name : data.name,
            address : data.address,
            img : imageURL,
            review : data.review
        }
        console.log(eventData);
        const url = `https://royal-syrup-45263.herokuapp.com/addReviews`;
        fetch(url,{
            method: 'POST',
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log("server side response", res));    
    };

    const handleChangeImage = (event) => {
        const imageData = new FormData();
        imageData.set('key', 'd2847ca22b20bc82ca92f90a0f0fd02d');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
            console.log(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
        
    }

    return (
        <div className="row">
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-8 p-5">

            <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
            <div style={{backgroundColor:''}} className="form-group">
            <input className="form-control" type='text' placeholder="Enter Your Name " name='name' {...register("name", { required: true })} />
            </div>
            <br />
            {errors.name && <span>This field is required</span>}
            <div className="form-group">
                 <input className="form-control" type='text'  placeholder="Enter Your Address" name='address' {...register("address", { required: true })} />
            </div>
            <br />
            {errors.address && <span>This field is required</span>}
            
            <div className="form-group">
                 <input name='img' className="form-control" type='file' {...register("img", { required: true })} onChange={handleChangeImage} />
            </div>
            <br />
            {errors.img && <span>This field is required</span>}

            <div className="form-group">
                 <input placeholder='Write Your Review Here' className="form-control" type='text' name='review' {...register("review", { required: true })} />
            </div>
            <br />
            <input style={{padding:'11px 36px',backgroundColor:'#17d3c2', fontSize:'17px', fontWeight:'700',color:'white',border:'none'}} type='submit' value='SUBMIT' />
            </form>
            </div>  
        </div>
    );
};

export default AddReview;