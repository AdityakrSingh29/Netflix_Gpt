import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {  onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import {addUser, removeUser} from "./../utils/userSlice"
import  { useEffect } from 'react'
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';



const Header = () => {
  const navigate=useNavigate();
  const user=useSelector(store=>store.user);
  const dispatch=useDispatch();
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch);

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  const handleGptSearch=()=>{
    //TOGGLE GPT SEARCH
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value));
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
      { showGptSearch && 
        <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
        {SUPPORTED_LANGUAGES.map((lang)=>(
          <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
        ))}
      </select>
      }
      <button className='py-2 px-4 m-2 mx-4 my-4 bg-purple-600 text-white rounded-lg' onClick={handleGptSearch}>
        {showGptSearch?"HomePage":"GPT Search"}
      </button>
        <img className="w-12 h-12 " alt="user-icon" src={user.photoURL}/>
        <button onClick={handleSignOut} className='font-semibold text-white'>(Sign Out!)</button>
      </div>
      }
    </div>

  )
}

export default Header
