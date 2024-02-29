import React from 'react'
import './List.css'
import phone from '../assets/phone.png'
import tablet from '../assets/tablet.png'
import laptop from '../assets/laptop.png'
import headphone from '../assets/headphone.png'
import watch from '../assets/watch.png'
import { Link } from 'react-router-dom'

const List = () => {
  return (
    <div className='pt-8 pb-12'>
        <div className='grid grid-cols-5 px-28'>
            <div className='list-container'>
                <div className='flex items-center justify-center'>
                    <Link to='/products/phone'>
                        <div className='w-20 h-20 border-[1px] rounded-full flex items-center justify-center list-hover'>
                            <img className='w-16' src={phone} alt="phone" />
                        </div> 
                    </Link>
                </div>
                <p className='flex items-center justify-center'>Điện thoại</p>
            </div>
            <div className='list-container'>
                <div className='flex items-center justify-center'>
                    <Link to='/products/tablet'>
                        <div className='w-20 h-20 border-[1px] rounded-full flex items-center justify-center list-hover'>
                            <img className='w-12' src={tablet} alt="tablet" />
                        </div>  
                    </Link> 
                </div>
                <p className='flex items-center justify-center'>Máy tính bảng</p>
            </div>
            <div className='list-container'>
                <div className='flex items-center justify-center'>
                    <Link to='/products/laptop'>
                        <div className='w-20 h-20 border-[1px] rounded-full flex items-center justify-center list-hover'>
                            <img className='w-16' src={laptop} alt="laptop" />
                        </div> 
                    </Link>
                </div>  
                <p className='flex items-center justify-center'>Laptop</p>
            </div>
            <div className='list-container'>
                <div className='flex items-center justify-center'>
                    <Link to='/products/headphone'>
                        <div className='w-20 h-20 border-[1px] rounded-full flex items-center justify-center list-hover'>
                            <img className='w-12' src={headphone} alt="headphone" />
                        </div> 
                    </Link> 
                </div>
                <p className='flex items-center justify-center'>Phụ kiện</p>
            </div>
            <div className='list-container'>
                <div className='flex items-center justify-center'>
                    <Link to='/products/watch'>
                        <div className='w-20 h-20 border-[1px] rounded-full flex items-center justify-center list-hover'>
                            <img className='w-28' src={watch} alt="watch" />
                        </div> 
                    </Link>
                </div>  
                <p className='flex items-center justify-center'>Đồng hồ</p>
            </div>
        </div>
    </div>
  )
}

export default List