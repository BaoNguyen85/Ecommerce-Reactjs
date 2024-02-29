import React from 'react'
import { MdOutlineStar, MdStarOutline } from 'react-icons/md';
import './Outstanding.css'
import { products } from '../data';
import { Link } from 'react-router-dom';

const Outstanding = () => {
    const filteredOutstanding = products.filter(item => item.outstanding === 1);
  return (
    <div className='px-28'>
        <h1 className='text-4xl pb-3'>Sản phẩm nổi bật
            <hr className='w-24 h-1 bg-black mt-2 mb-2' />
        </h1>
        
        <div className='grid grid-cols-5'>
            {filteredOutstanding.map(item => (
            <Link to={`/product/${item.id}`}>
            <div key={item.id} className='py-6 border-[1px] rounded-md product-container h-full'>
               <div className='flex items-center justify-center'>
                    <img className='w-72' src={item.img} alt="product" />
                </div> 
                <div className='mx-7 mt-2 px-2 py-2 border-[1px] rounded-md'>
                    <p className='text-xl font-semibold'>{item.name}</p>
                    <p className='line-through text-slate-800'>{item.oldprice.toLocaleString()}đ</p>
                    <p className='text-xl font-semibold'>{item.price.toLocaleString()}đ</p>
                    <p className='flex'>
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdStarOutline />
                    </p>
                </div>
            </div>
            </Link>
            ))}
        </div>
    </div>
  )
}

export default Outstanding