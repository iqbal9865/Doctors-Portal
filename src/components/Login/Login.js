import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config'
import loginImage from '../../images/loginImage.png'
import { UserContext } from '../../App';
import {Redirect, useHistory, useLocation} from "react-router-dom";

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

const Login = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    var googleProvider = new firebase.auth.GoogleAuthProvider();
    var facebookProvider = new firebase.auth.FacebookAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email }
        setLoggedInUser(signedInUser);
        history.replace(from);
        console.log(email, displayName,'& token is: ', token)
        })
        
        .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log('errorCode: ',errorCode,errorMessage, email, credential)
        });
    }

    const handleFacebookSignIn = () => {
    firebase.auth()
  .signInWithPopup(facebookProvider)
  .then((result) => {
    var credential = result.credential;
    var accessToken = credential.accessToken;
    const { displayName, email } = result.user;
    const signedInUser = { name: displayName, email }
    setLoggedInUser(signedInUser);
    history.replace(from);
    console.log(email,displayName,accessToken)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log('errorCode: ',errorCode,errorMessage, email, credential)
    });
    }

    return(
        <div className='row my-5 container m-auto'>
            <div className="col-md-5 my-5">
                <h4 className='mt-5'>LOGIN</h4>
                <div className='form-group my-3 mt-4'>
                    <input placeholder='Enter Your Email' className='form-control' />
                </div>
                <div className='form-group my-3'>
                    <input placeholder='Enter Your Password' className='form-control' />
                </div>
                <button style={{padding:'11px 36px',backgroundColor:'#17d3c2', fontSize:'17px', fontWeight:'700',color:'white',border:'none'}}>LOGIN</button> 
                <br/>  <br/>
                <button onClick={handleGoogleSignIn}  style={{padding:'11px 36px',backgroundColor:'#fc3c53', fontSize:'17px', fontWeight:'700',color:'white',border:'none'}} >SignUp Using Google</button>
                <br/>  <br/>
                <button onClick={handleFacebookSignIn}  style={{padding:'11px 40px',backgroundColor:'#4e15c4', fontSize:'17px', fontWeight:'700',color:'white',border:'none'}} >SignUp Using Facebook</button> <br/><br/>
                <p  className='text-secondary'>Right Now You can only sign up using Google and Facebook, Email login system coming soon! </p>
            </div>
            <div className="col-md-6 offset-1 d-none d-md-block">
                <img className='img-fluid' style={{maxWidth:'100%', width:'550px', height:'auto'}} src={loginImage} alt='login' />
                
                
            </div>
           
        </div>
    )
}
export default Login;