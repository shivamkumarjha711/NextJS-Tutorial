"use client";

import React, { useState } from 'react';
import loginSvg from "../assets/undraw_mobile_content_xvgr.png";
import Image from 'next/image';
import { addTask } from '../services/taskService';
import { toast } from 'react-toastify';

// export const metadata = {
//     title: "Add Task : Work Manager",
// };

const AddTask = () => {
  // console.log("componenet");

  // document.title = metadata.title

  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    userId: "6532cca62c62cf1f913541e2"
  })

  const handleAddTask = async (event) => {
    event.preventDefault();
    // console.log(event.target);

    // validate task data
    try { 
      const result = await addTask(task);
      console.log(result);
      toast.success("Your Task is Added !!", {
        position: "top-center",
      })

      setTask({
        title: "",
        content: "",
        status: "none"
      })
    } catch (error) {
      console.log(error);
      toast.error("Task not added", {
        position: "top-center"
      })
    }
    
  }

  return (
    <div className='grid grid-cols-12 justify-center m-3'>
        <div className='col-span-6 col-start-4 p-5'>
          <div className='flex justify-center'>
            <Image src={loginSvg} className='h-60 w-80' alt='photo' />
          </div>
          <h1 className='text-3xl font-medium text-center mt-5'>Add Your Task Here</h1>

          <form action='#!' onSubmit={handleAddTask}>
            {/* task title */}
            <div className='mt-4'>
              <label 
                htmlFor='task_title'
                className='block text-m font-medium mb-2'
              >
                Title
              </label>
              <input 
                type='text' 
                className='w-full p-2 rounded-lg bg-gray-50 focus:ring-gray-400 border border-gray-400' 
                id='task_title'
                name='task_title'
                onChange={(event) => {
                  setTask({
                    ...task,
                    title: event.target.value,
                  });
                }}
                value={task.title}
              />
            </div>
            {/* task content */}
            <div className='mt-4'>
              <label 
                htmlFor='task_content'
                className='block text-m font-medium mb-2'
              >
                Content
              </label>
              <textarea 
                type='text' 
                className='w-full p-2 rounded-lg bg-gray-50 focus:ring-gray-400 border border-gray-400' 
                id='task_content'
                rows={5}
                name='task_content'
                onChange={(event) => {
                  setTask({
                    ...task,
                    content: event.target.value,
                  });
                }}
                value={task.content}
              />
            </div>
            {/* task status */}
            <div className='mt-4'>
              <label 
                htmlFor='task_status'
                className='block text-m font-medium mb-2'
              >
                Status
              </label>
              <select
                id='task_status'
                className='w-full p-2 rounded-lg bg-gray-50 focus:ring-gray-400 border border-gray-400'
                name='task_status'
                onChange={(event) => {
                  setTask({
                    ...task,
                    status: event.target.value,
                  });
                }}
                value={task.status}
              >
                <option value="none" disabled>
                  ---Select Status---
                </option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            {/* task button */}
            <div className='mt-7 flex justify-center gap-4'>
              <button className='bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-800'>Add Task</button>
              <button className='bg-red-600 py-2 px-3 rounded-lg hover:bg-red-800'>Clear</button>
            </div>

            {/* {JSON.stringify(task)} */}
          </form>
        </div>
    </div>
  )
}

export default AddTask