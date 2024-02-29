import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: ''
  });

  const { username, email, phone, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post('http://localhost:5000/api/users/register', formData);
      console.log(res.data);
      toast.success("Register Successfully!");
    } catch(error) {
      console.error('Lỗi khi đăng ký người dùng:', error.response.data.message);
    }
  };

  return (
    <div className='bg-slate-100'>
      <div className='flex flex-col items-center justify-center'>
        <div className='border-[1px] w-1/4 rounded-lg my-8 bg-white'>
        <h1 className='text-3xl pt-5 text-center'>Đăng Ký</h1>
        <form onSubmit={handleSubmit}>
          <div className='mx-10 mt-10'>
              <p>Họ tên:</p>
              <input className='w-full my-4 px-2 py-1 border-[1px]' type="text" name="username" value={username} onChange={handleChange} required/>
              <p>Email:</p>
              <input className='w-full my-4 px-2 py-1 border-[1px]' type="email" name="email" value={email} onChange={handleChange} required/>
              <p>Số điện thoại:</p>
              <input className='w-full my-4 px-2 py-1 border-[1px]' type="text" name="phone" value={phone} onChange={handleChange} required/>
              <p>Password:</p>
              <input className='w-full my-4 px-2 py-1 border-[1px]' type="password" name="password" value={password} onChange={handleChange} required/>
              <div className='text-center'>
                <button type='submit' className='bg-black text-white px-2 py-1 mt-5 rounded-md hover:bg-slate-700 duration-300'>Đăng Ký</button>
              </div>
          </div>
        </form> 
        <div className='text-center mt-5 mb-10'>
          <Link to='/login' className='text-1xl hover:text-blue-500 duration-300'>
            Đăng nhập
          </Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Register