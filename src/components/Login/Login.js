import React, { useContext, useState } from 'react';
import firebase from "firebase/app" 
import "firebase/auth";
import firebaseConfig from '../../firebase.config'
import loginImage from '../../images/loginImage.png'
import { UserContext } from '../../App';
import {Redirect, useHistory, useLocation} from "react-router-dom";
import { faBullseye } from '@fortawesome/free-solid-svg-icons';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

const Login = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(false)
    var googleProvider = new firebase.auth.GoogleAuthProvider();
    var facebookProvider = new firebase.auth.FacebookAuthProvider();

    const [user, setUser] = useState({
        isSignedIn : false,
        name : '',
        email : '',
        password : '',
        success: false,
        error : '',
        newUser: false
    })

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

    const handleBlur = (e) => {
        console.log(e.target.name, ":", e.target.value)
        let isFieldValid;
        if(e.target.name === 'email') {
            isFieldValid = /^\S+@\S+\.\S+$/.test(e.target.value)
        }
        if(e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6
            const hasPasswordNumber = /\d{1}/.test(e.target.value)
            isFieldValid = isPasswordValid && hasPasswordNumber;
        }
        if(isFieldValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
        if(newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((userCredential) => {
              var user = userCredential.user;
              const newUserInfo = {...user}
              newUserInfo.success = true;
              newUserInfo.error = '';
              setUser(newUserInfo)
              setLoggedInUser(newUserInfo)
              updateUserInfo(user.name)
              history.replace(from);
            })
            .catch((error) => {
            //   var errorCode = error.code;
              var errorMessage = error.message;
              const newUserInfo = {...user}
              newUserInfo.error = errorMessage;
              newUserInfo.success = false;
              setUser(newUserInfo)
            });
        }
        if(!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((userCredential) => {
                
              var user = userCredential.user;
              const newUserInfo = {...user}
              newUserInfo.success = true;
              newUserInfo.error = '';
              setUser(newUserInfo)
              setLoggedInUser(newUserInfo)
              console.log('sign in user: ', user)
              history.replace(from);
            })
            .catch((error) => {
                //   var errorCode = error.code;
              var errorMessage = error.message;
              const newUserInfo = {...user}
              newUserInfo.error = errorMessage;
              newUserInfo.success = false;
              setUser(newUserInfo)
            });
        }
        e.preventDefault();
    }
    const updateUserInfo = (name) => {
        var user = firebase.auth().currentUser;
        user.updateProfile({
        displayName: name,
        
        }).then(function() {
            console.log('user name updated successfully')
        }).catch(function(error) {
            console.log('error:',error)
        });
    }

    return(
        <div className='row my-5 container m-auto'>
            <div className="col-md-5 my-4">
                <h4 className='mt-2'>{newUser ? 'USER REGISTRATION' : 'LOGIN'}</h4>
                <form onSubmit={handleSubmit}>
                <div className='form-group my-3 mt-4'>
                    <input type='checkbox' name="newUser" id='' onChange = {() => setNewUser(!newUser)} />
                    <label htmlFor=""><span style={{padding:'5px', fontWeight:'600'}}>New User Registration</span></label>
                </div>
                {newUser && <div className='form-group mt-2'>
                    <input placeholder='Enter Your Name' className='form-control' type="text" required onBlur={handleBlur} name='name' />
                </div>}
                <div className='form-group my-3 mt-3'>
                    <input placeholder='Enter Your Email' className='form-control' type="email" required onBlur={handleBlur} name='email' />
                </div>
                <div className='form-group my-3'>
                    <input placeholder='Enter Your Password' className='form-control' type="password" required onBlur={handleBlur} name='password' />
                </div>
               <input type="submit" value={newUser? 'SIGN UP' : 'LOGIN'} style={{padding:'11px 36px',backgroundColor:'#17d3c2', fontSize:'17px', fontWeight:'700',color:'white',border:'none'}} />    
                </form>  
                <p style={{color:'red'}}>{user.error}</p>
                {user.success && <p style={{color: 'green'}}>User {newUser ? 'Created' : 'Logged In'} Successfully</p>}
                
                <br/>  
                <button onClick={handleGoogleSignIn}  style={{padding:'11px 36px',backgroundColor:'#fc3c53', fontSize:'17px', fontWeight:'700',color:'white',border:'none'}} >SignUp Using Google</button>
                <br/>  <br/>
                <button onClick={handleFacebookSignIn}  style={{padding:'11px 40px',backgroundColor:'#4e15c4', fontSize:'17px', fontWeight:'700',color:'white',border:'none'}} >SignUp Using Facebook</button> <br/><br/>
               
            </div>
            <div className="col-md-6 offset-1 d-none d-md-block">
                <img className='img-fluid' style={{maxWidth:'100%', width:'550px', height:'auto'}} src={loginImage} alt='login' />            
            </div>
        </div>
    )
}
export default Login;