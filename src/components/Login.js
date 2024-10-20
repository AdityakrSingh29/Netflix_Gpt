import React, { useState,useRef } from 'react'
import Header from './Header'
import { validate } from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';




const Login = () => {

  const [isSignInForm,setSignInForm]=useState(true);
  const email=useRef(null);
  const password=useRef(null);
  const [errorMessage,setErrorMessage]=useState(null);
  const navigate=useNavigate();
  const name=useRef(null);
  const dispatch=useDispatch();

  const validateForm=()=>{
    //Validation Logic
    const message=validate(email.current.value,password.current.value);
    setErrorMessage(message);
    if(message) return;
    //SIGNIN/SIGNUP Logic
    if(!isSignInForm)
    {
      //SIGNUP-LOGIC
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    //UPDATE-PROFILE
    updateProfile(user, {
      displayName: auth.current.value, photoURL: "https://avatars.githubusercontent.com/u/143291559?v=4"
    }).then(() => {
      const {uid,email,displayName,photoURL} = auth.currentUser;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
    navigate("/Browse");
    }).catch((error) => {
      setErrorMessage(error.message);
    });
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
  });
    }
    else{
      // SIGNIN-LOGIC
signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/Browse");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
  });
    }
  }

  const toggleSignInForm=()=>{
    setSignInForm(!isSignInForm);
  }

  return (
    <div>
    <Header/>
    <div className='absolute'>
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_medium.jpg" 
    alt="Bg-image"/>
    </div>
    <form onSubmit={(e)=>e.preventDefault()} 
    className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>
        {isSignInForm?"Sign In":"Sign Up"}
        </h1>
        { !isSignInForm && 
          <input ref={name} type="text" placeholder='Enter Your Full-Name' className='p-4 my-4 w-full bg-gray-800 rounded-md'/>
        }
        <input  ref={email} type="text" placeholder='Enter Your Email Address Here..' className='p-4 my-4 w-full bg-gray-800 rounded-md'/>
        <input ref={password} type="password" placeholder='Enter Your Password Here..' className='p-4 my-4 w-full bg-gray-800 rounded-md'/>
        <p className='text-red-800 font-semibold p-1'>{errorMessage}</p>
        <button className='p-4 my-6 bg-red-700 w-full rounded-md' onClick={validateForm} >
        {isSignInForm?"Sign In":"Sign Up"}
        </button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
        {isSignInForm?"SignUp Now":"Already Regsitered! Sign In Now!"}
        </p>
    </form>
    </div>
  )
}

export default Login
