"use client"

import React from 'react'

const Footer = () => {
  return (
    <footer className='h-30 bg-blue-600 text-white mt-5'>
        <div className='flex p-5 justify-around'>
            <div className='text-center flex justify-center flex-col'>
                <h1 className='text-3xl'>Welcome to Work Manager</h1>
                <p>What are the contents of any article, news piece, or guide that's published in the blog section of a website.</p>
            </div>
            <div className='text-center'>
                <h1>Important Links</h1>
                <ul>
                    <li><a href='#!'>Facebook</a></li>
                    <li><a href='#!'> Threads</a></li>
                    <li><a href='#!'> Instagram</a></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer