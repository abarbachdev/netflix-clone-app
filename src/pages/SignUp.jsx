import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'

const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {user, signUp} = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            await signUp(email, password)
            navigate('/')
        } catch(error){
            console.log(error)
        }
    }


  return (
    <div>
        <div className='w-full h-screen'>
            <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/39f3c979-c105-4948-9c51-611eedf3a6fd/7b7d2a1d-d212-40c8-8a99-a344bf287544/MA-fr-20230612-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" />
                <div className='bg-black/50 fixed top-0 left-0 w-full h-screen'></div>
                <div className='fixed w-full px-4 py-24 z-50'>
                    <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                        <div className='max-w-[320px] mx-auto py-16 '>
                            <h1 className='text-2xl '>Sign Up</h1>
                            <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                                <input onChange={(e)=> setEmail(e.target.value)} className='p-3 my-2 bg-gray-600 rounded' type="email" placeholder='Email' autoComplete='email'/>
                                <input onChange={(e)=> setPassword(e.target.value)} className='p-3 my-2 bg-gray-600 rounded' type="password" placeholder='Password'/>
                                <button className='bg-red-600 py-3 my-6 rounded '>Sign Up</button>
                                <div className='flex justify-between items-center text-sm text-gray-500'>
                                    <p> <input className='mr-1' type="checkbox" /> Remember me </p>
                                    <p>Need Help?</p>
                                </div>
                                <div>
                                    <p className='py-8'> <span className='text-sm text-gray-500'>Already subscribed to Netflix?</span>
                                    <Link to='/login'> Sign In</Link>
                                    </p>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
             
        </div>

    </div>
  )
}

export default SignUp