import React from 'react'
import user from '../assets/avt.jpg'

const Comment = () => {
  return (
    <div className='px-6'>
        <h1 className='text-2xl font-semibold py-2'>Đánh Giá</h1>
        <div className='py-2'>
            <div className='flex items-center gap-2 text-1xl'>
                <img className='w-10 h-10 rounded-full object-fill' src={user} alt="user" />
                <p>nguyenvana@gmail.com</p>
            </div>
            <div className='pl-12'>
                Sản phẩm rất tốt!!
            </div>
        </div>
        <div className='py-2'>
            <div className='flex items-center gap-2 text-1xl'>
                <img className='w-10 h-10 rounded-full object-fill' src={user} alt="user" />
                <p>nguyenvana@gmail.com</p>
            </div>
            <div className='pl-12'>
                Sản phẩm rất okela nha!!
            </div>
        </div>
    </div>
  )
}

export default Comment