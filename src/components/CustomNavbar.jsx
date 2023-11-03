"use client"

import UserContext from '@/context/userContext'
import { logout } from '@/services/userService'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { Fragment, useContext } from 'react'
import { toast } from 'react-toastify'

const CustomNavbar = () => {
  const router = useRouter();
  const context = useContext(UserContext)
  console.log(context);

  async function doLogout() {
    try {
      const result = await logout();
      console.log(result);
      context.setUser(undefined);
      router.push("/login")
    } catch (error) {
      toast.error("Logout Error")
      console.log(error);
    }
  }

  return (
    <nav className='bg-blue-600 h-16 py-2 px-8 flex justify-between items-center text-white sticky top-0 z-50'>
      <div className='left'>
        <h1 className='text-xl font-semibold'>
          <Link href='/'>Task Manager</Link>
        </h1>
      </div>
      <div>
        <ul className='flex space-x-4 gap-5'>
          {
            context.user && (
              <Fragment>
                <li>
                  <Link href={'/'} className='hover:text-blue-200'>Home</Link>
                </li>
                <li>
                  <Link href={'/add-task'} className='hover:text-blue-200'>Add Task</Link>
                </li>
                <li>
                  <Link href={'/show-tasks'} className='hover:text-blue-200'>Show Tasks</Link>
                </li>
              </Fragment>
            )
          }
        </ul>
      </div>
      <div>
        <ul className='flex space-x-4'>
          {context.user && (
              <Fragment>
                <li>
                  <Link href={'#!'}>{context.user.email}</Link>
                </li>
                <li>
                  <button onClick={doLogout}>Logout</button>
                </li>
              </Fragment>
            )
          }

          {!context.user && (
              <Fragment>
                <li>
                  <Link href={'/login'}>Login</Link>
                </li>
                <li>
                  <Link href={'/signup'}>Signup</Link>
                </li>
              </Fragment>
            )
          }
        </ul>
      </div>
    </nav>
  )
}

export default CustomNavbar