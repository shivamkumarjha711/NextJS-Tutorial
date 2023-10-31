import UserContext from '@/context/userContext'
import React, { useContext } from 'react'
import { RxCrossCircled } from "react-icons/rx"

const Task = ({task}) => {
    const {user} = useContext(UserContext);

  return (
    <div className={`shadow-lg text-white mt-2 rounded-md ${
        task.status == "completed" ? "bg-green-600" : "bg-gray-600"
    }`}>
        <div className='p-5'>
            <div className='flex justify-between'>
                <h1 className='text-2xl font-medium mb-2'>{task.title}</h1>
                <RxCrossCircled onClick={() => deleteTask(task._id)} className='text-4xl rounded-full hover:bg-slate-800 cursor-pointer' />
            </div>
            <p className='font-normal'>{task.content}</p>
            <div className='flex justify-between mt-3'>
                <p className='text-left'>Status: <span className='font-medium'>{task.status.toUpperCase()}</span></p>
                <p className='text-right'>Author: <span className='font-semibold'>{user?.name}</span></p>
            </div>
        </div>
    </div>
  )
}

export default Task