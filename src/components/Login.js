import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true)


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

      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
      <h1 className='font-bold text-2xl m-2'>{btnText}</h1>
        <input type='text' placeholder='Email Address' className='p-2 m-2 w-full rounded-m bg-gray-700'/>
        {!isSignInForm &&
        (<input type='text' placeholder='Full Name' className='p-2 m-2 w-full rounded-m bg-gray-700'/>)
        }
        <input type='password' placeholder='Password' className='p-2 m-2 w-full rounded-m bg-gray-700'/>
        <button className='p-2 m-2 bg-red-700 w-full rounded-lg'>{btnText}</button>

       <p className='p-4' onClick={toggleSignInForm}> {isSignInForm? 'New to Netflix? Sign up Now' : 'Already a user? Sign In Now' }</p>
      </form>
    </div>
  )
}

export default Login;
