"use client"

import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { login } from '../../services/userService'
import { useRouter } from 'next/navigation'
import UserContext from '@/context/userContext'

const Login = () => {

    const router = useRouter();
    const context = useContext(UserContext);

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    })

    const loginFormSubmitted = async (event) => {
        event.preventDefault();
        console.log(loginData);

        if (loginData.email.trim() === "" || loginData.password.trim() === "") {
            toast.info("Invalid Data !!", {
                position: "top-center"
            })
            return;
        }

        // valid data

        // login
        try {
            const result = await login(loginData)
            console.log("result", result);
            toast.success("Logged In", {
                position: "top-center"
            });
            context.setUser(result.user);
            // redirect
            router.push("/profile/user")

        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message, {
                position: "top-center"
            })
        }
        
    }

  return (
    <div className='grid grid-cols-12'>
        <div className='col-span-4 col-start-5 border'>
            <div className='py-5'>
                <h1 className='text-3xl font-medium text-center'>Login Here</h1>
                <form action='#!' className='mt-5' onSubmit={loginFormSubmitted}>
                    {/* email */}
                    <div className='mt-3'>
                        <label 
                            htmlFor='user_email' 
                            className='block text-m font-medium mb-2 ps-2'
                        >
                            Email
                        </label>
                        <input
                            type='email'
                            className='w-full p-2 rounded-lg bg-gray-50 focus:ring-gray-400 border border-gray-400'
                            placeholder='Enter Your Email'
                            id='user_email'
                            name='user_email'
                            onChange={(event) => {
                                setLoginData({
                                    ...loginData,
                                    email: event.target.value,
                                })
                            }}
                            value={loginData.email} 
                        />
                    </div>
                    {/* password */}
                    <div className='mt-3'>
                        <label 
                            htmlFor='user_password' 
                            className='block text-m font-medium mb-2 ps-2'
                        >
                            Password
                        </label>
                        <input
                            type='password'
                            className='w-full p-2 rounded-lg bg-gray-50 focus:ring-gray-400 border border-gray-400'
                            placeholder='Enter Your Password'
                            id='user_password'
                            name='user_password'
                            onChange={(event) => {
                                setLoginData({
                                    ...loginData,
                                    password: event.target.value,
                                })
                            }}
                            value={loginData.password} 
                        />
                    </div>
                    <div className='flex justify-center'>
                        <button type='submit' className='px-2 py-2 bg-green-600 rounded mt-3 hover:bg-green-400'>Login</button>
                        <button type='button' className='px-2 py-2 bg-orange-600 ms-3 mt-3 rounded hover:bg-orange-400'>Reset</button>
                    </div>
                    {/* {JSON.stringify(loginData)} */}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login