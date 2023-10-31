"use client"

import React, { useState } from 'react'
import signupBanner from "../../assets/signup.svg"
import Image from 'next/image'
import { toast } from 'react-toastify'
import { signUp } from '../../services/userService'

const SignUp = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        about : "",
        profileURL: "https://i.stack.imgur.com/34AD2.jpg"
    })

    const doSignp = async (event) => {
        event.preventDefault();

        // console.log(data);

        if (data.name.trim() === "") {
            toast.warning("Name is Required", {
                position: "top-center"
            })
            return;
        }

        // rest validation - assignment

        // form submit
        try {
            const result = await signUp(data)
            console.log(result);

            toast.success("User is Register", {
                position: "top-center"
            })

            setData({
                name: "",
                email: "",
                password: "",
                about : "",
                profileURL: "https://i.stack.imgur.com/34AD2.jpg"
            })

        } catch (error) {
            console.log(error);
            toast.error("SignupError", {
                position: "top-center"
            })
        }
    }

    const resetForm = () => {
        setData({
            name: "",
            email: "",
            password: "",
            about : "",
            profileURL: "https://i.stack.imgur.com/34AD2.jpg"
        })
    }

  return (
    <div className='grid grid-cols-12'>
        <div className='col-span-4 col-start-5 border'>
            <div className='py-5'>
                <div  className='flex justify-center m-5'>
                    <Image src={signupBanner} alt='signupbanner' style={{width: "40%"}}/>
                </div>
                <h1 className='text-3xl font-medium text-center'>SignUp Here</h1>
                <form action='#!' className='mt-5' onSubmit={doSignp}>
                    {/* name */}
                    <div className='mt-3'>
                        <label 
                            htmlFor='user_name' 
                            className='block text-m font-medium mb-2 ps-2'
                        >
                            Username
                        </label>
                        <input
                            type='text'
                            className='w-full p-2 rounded-lg bg-gray-50 focus:ring-gray-400 border border-gray-400'
                            placeholder='Enter Your Name'
                            id='user_name'
                            name='user_name'
                            onChange={(event) => {
                                setData({
                                    ...data,
                                    name: event.target.value,
                                })
                            }}
                            value={data.name} 
                        />
                    </div>
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
                                setData({
                                    ...data,
                                    email: event.target.value,
                                })
                            }}
                            value={data.email} 
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
                                setData({
                                    ...data,
                                    password: event.target.value,
                                })
                            }}
                            value={data.password} 
                        />
                    </div>
                    {/* about section */}
                    <div className='mt-3'>
                        <label 
                            htmlFor='user_about' 
                            className='block text-m font-medium mb-2 ps-2'
                        >
                            About
                        </label>
                        <textarea
                            type='text'
                            className='w-full p-2 rounded-lg bg-gray-50 focus:ring-gray-400 border border-gray-400'
                            placeholder='Enter Here'
                            id='user_about'
                            name='user_about'
                            rows={5}
                            onChange={(event) => {
                                setData({
                                    ...data,
                                    about: event.target.value,
                                })
                            }}
                            value={data.about} 
                        ></textarea>
                    </div>
                    <div className='flex justify-center'>
                        <button type='submit' className='px-2 py-2 bg-green-600 rounded mt-3 hover:bg-green-400'>Signup</button>
                        <button type='button' onClick={resetForm} className='px-2 py-2 bg-orange-600 ms-3 mt-3 rounded hover:bg-orange-400'>Reset</button>
                    </div>
                    {/* {JSON.stringify(data)} */}
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignUp