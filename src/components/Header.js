import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {  onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import {addUser, removeUser} from "./../utils/userSlice"
import  { useEffect } from 'react'
import { LOGO } from '../utils/constants';



const Header = () => {
  const navigate=useNavigate();
  const user=useSelector(store=>store.user);
  const dispatch=useDispatch();

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  useEffect(()=>{
    const unsubscribe =onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        navigate("/Browse");

      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //UNSUBSIRIBE WILL BE CALLED WHEN COMPONENT UNMOUNT
    return()=> unsubscribe();
  },[])

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44'
      src={LOGO}
      alt="Logo"/>
      { user && 
      <div className='flex p-2'>
        <img className="w-12 h-12 " alt="user-icon" src={user.photoURL}/>
        <button onClick={handleSignOut} className='font-semibold text-white'>(Sign Out!)</button>
      </div>
      }
    </div>

  )
}

export default Header
