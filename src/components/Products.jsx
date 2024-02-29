import React from 'react'
import { MdOutlineStar, MdStarOutline } from 'react-icons/md';
import './Outstanding.css'
import { products } from '../data';
import { Link, useLocation  } from 'react-router-dom';

const Products = () => {
    // Lấy thông tin về location (đường dẫn hiện tại) từ React Router
    const location = useLocation();

    // Lấy ra category từ đường dẫn hiện tại
    const category = location.pathname.split('/')[2];

    // Lọc các sản phẩm dựa trên category từ đường dẫn
    const filteredProducts = products.filter(item => item.category === category);

  return (
    <div className='px-28'>
        <h1 className='text-4xl pb-3'>Danh sách sản phẩm
            <hr className='w-24 h-1 bg-black mt-2 mb-2' />
        </h1>
        
        <div className='grid grid-cols-5'>
            {filteredProducts.map(item => (
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

export default Products