import React from 'react'
import google from '../assets/google.png'
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
} from "firebase/auth";
import { addUser } from '../redux/Slice';
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = (e) => {
      e.preventDefault();
      signInWithPopup(auth, provider).then((result) => {
          const user = result.user;
          dispatch(
              addUser({
                  _id: user.uid,
                  name: user.displayName,
                  email: user.email,
                  image: user.photoURL,
              }
          ));
          setTimeout(() => {
              navigate("/");
          }, 1500);
      }).catch((error) => {
          console.log(error);
      });
  }

  return (
    <div className='bg-slate-100'>
      <div className='flex flex-col items-center justify-center'>
        <div className='border-[1px] w-1/4 rounded-lg my-8 bg-white'>
        <h1 className='text-3xl pt-5 text-center'>Đăng Nhập</h1>
          <div className='mx-10 my-10'>
            <p>Email:</p>
            <input className='w-full my-4 px-2 py-1 border-[1px]' type="email" required/>
            <p>Password:</p>
            <input className='w-full my-4 px-2 py-1 border-[1px]' type="password" required/>
            <div className='text-center'>
              <button className='bg-black text-white px-2 py-1 mt-5 rounded-md hover:bg-slate-700 duration-300'>Đăng Nhập</button>
            </div>
            <div className='mt-5'>
              <div onClick={handleGoogleLogin} className='flex gap-2 bg-blue-600 text-white py-1 items-center justify-center mx-20 rounded-md'>
                <img className='w-5' src={google} alt="google" />
                <button>Đăng nhập Google</button>
              </div>
            </div>
            <Link to='/register'>
              <p className='mt-5 text-center hover:text-blue-500 duration-300 text-1xl'>Chưa có tài khoản?</p>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login