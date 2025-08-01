import React, { useState, useRef } from 'react'
import Header from './Header'
import { checkValidation } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword , updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import {  useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {

  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const nameRef = useRef(null)
  const emailRef= useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const handleButtonClick=()=>{

    // validate form data
   const message= checkValidation(emailRef.current.value, passwordRef.current.value);
   setErrorMessage(message);
   if(message) return ;
    if(!isSignInForm){
      // sign up logic
      createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
            displayName: nameRef.current.value, photoURL: "https://avatars.githubusercontent.com/u/68016624?v=4"
          }).then(() => {
            const {uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({uid, email, displayName, photoURL }))
            navigate("/browse")
            
          }).catch((error) => {
           setErrorMessage(error.message)
          });
          
      
      })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage)
        // ..
      });

    }
    else {
      // sign in logic
      signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      navigate("/browse")

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
       setErrorMessage(errorCode + "-" + errorMessage)
    });
  }
}


  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);
    }

   const btnText= isSignInForm ? 'Sign In': 'Sign Up' ;
  return (
    <div>
      <Header/>
      <div className='absolute'>
       <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1280,h_720,q_75,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs'
        alt='logo'/>
      </div>

      <form onSubmit={(e)=> e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
      <h1 className='font-bold text-2xl m-2'>{btnText}</h1>
        <input ref={emailRef} type='text' placeholder='Email Address' className='p-2 m-2 w-full rounded-m bg-gray-700'/>
        {!isSignInForm &&
        (<input ref={nameRef} type='text' placeholder='Full Name' className='p-2 m-2 w-full rounded-m bg-gray-700'/>)
        }
        <input ref={passwordRef} type='password' placeholder='Password' className='p-2 m-2 w-full rounded-m bg-gray-700'/>
        <button onClick={handleButtonClick} className='p-2 m-2 bg-red-700 w-full rounded-lg'>{btnText}</button>
        <p className='text-sm p-1 m-2 text-red-700'>{errorMessage}</p>
       <p className='p-4' onClick={toggleSignInForm}> {isSignInForm? 'New to Netflix? Sign up Now' : 'Already a user? Sign In Now' }</p>
      </form>
    </div>
  )
}

export default Login;
