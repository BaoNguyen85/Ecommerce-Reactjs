import React from 'react'
import paymentmethods from '../assets/paymentmethods.jpg'
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='pl-40 pr-40'>
        <div className='mx-auto grid grid-cols-4'>
            <div className='py-6'>
                <h1 className='text-2xl font-semibold mb-4'>Về chúng tôi <hr className='w-20 border-none bg-blue-500 h-1 mt-2' /></h1>
                <p>Giới thiệu</p>
                <p>Trung tâm trợ giúp</p>
                <p>Tuyển dụng</p>
            </div>
            <div className='py-6'>
                <h1 className='text-2xl font-semibold mb-4'>Chính sách của chúng tôi <hr className='w-20 border-none bg-blue-500 h-1 mt-2' /></h1>
                <p>Chính sách bảo hành</p>
                <p>Chính sách vận chuyển</p>
                <p>Chính sách đổi trả</p>
            </div>
            <div className='py-6'>
                <h1 className='text-2xl font-semibold mb-4'>Thanh toán <hr className='w-20 border-none bg-blue-500 h-1 mt-2' /></h1>
                <img className='w-64' src={paymentmethods} alt="paymentmethods" />
            </div>
            <div className='py-6'>
                <h1 className='text-2xl font-semibold mb-4'>Mạng xã hội <hr className='w-20 border-none bg-blue-500 h-1 mt-2' /></h1>
                <p className='flex gap-2 items-center'><FaFacebook /> Facebook</p>
                <p className='flex gap-2 items-center'><FaTwitter /> Twitter</p>
                <p className='flex gap-2 items-center'><FaInstagram /> Instagram</p>
                <p className='flex gap-2 items-center'><FaYoutube /> Youtube</p>
            </div>
        </div>
    </div>
  )
}

export default Footer