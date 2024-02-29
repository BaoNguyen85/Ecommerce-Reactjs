import React, { useState } from 'react'
import { MdShoppingCart } from 'react-icons/md';
import Comment from '../components/Comment';
import { products } from '../data';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from '../redux/Slice';
import { incrementQuantity } from '../redux/Slice';
import { toast } from 'react-toastify';

const ProductDetails = () => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.cart.products);
    const { id } = useParams();
    let [baseQty, setBaseQty] = useState(1);
    const selectedProduct = products.find(item => item.id === parseInt(id));

    if(!selectedProduct){
        return(
            <div>NO</div>
        )
    }

    const handleAddToCart = () => {
        const existingProduct = product.find(item => item.id === selectedProduct.id);
    
        if (existingProduct) {
            dispatch(
                incrementQuantity({
                    id: selectedProduct.id,
                    name: selectedProduct.name,
                    category: selectedProduct.category,
                    img: selectedProduct.img,
                    price: selectedProduct.price,
                    quantity: baseQty,
                    desc: selectedProduct.desc
                })
            ); 
            toast.success(`${selectedProduct.name} is added`)
        } else {
            dispatch(
                addProduct({
                    id: selectedProduct.id,
                    name: selectedProduct.name,
                    category: selectedProduct.category,
                    img: selectedProduct.img,
                    price: selectedProduct.price,
                    quantity: baseQty,
                    desc: selectedProduct.desc
                })
            ); 
            toast.success(`${selectedProduct.name} is added`)
        }
    };
  return (
    <div>
        <div className='grid grid-cols-2 py-20'>
            <div className='flex items-center justify-end'>
                <img className='w-2/3' src={selectedProduct.img} alt="iphone" />
            </div>
            <div className='pl-20'>
                <div>
                    <h1 className='text-4xl font-semibold py-2'>{selectedProduct.name}</h1>
                    <h1 className='line-through text-slate-700 text-xl py-2'>{selectedProduct.oldprice}đ</h1>
                    <h1 className='text-slate-700 text-2xl py-2'>{selectedProduct.price}đ</h1>
                    <p className='py-2'>{selectedProduct.desc}</p>
                </div>
                <div className='flex py-2'>
                    <button
                    onClick={()=>
                        setBaseQty(baseQty === 1 ? (baseQty = 1) : baseQty -1)
                    } 
                    className='border-[1px] px-3'>
                        -
                    </button>
                    <p className='px-3'>{baseQty}</p>
                    <button 
                    onClick={()=>setBaseQty(baseQty + 1)}
                    className='border-[1px] px-3'>
                        +
                    </button>
                </div>
                <div className='bg-black mt-2 py-2 w-36 flex items-center justify-center rounded-md'>
                    <button>
                        <div className='flex items-center justify-center gap-1'>
                           <MdShoppingCart className='text-white' />
                            <p 
                            onClick={handleAddToCart}
                            className='text-white'>
                                Thêm giỏ hàng
                            </p> 
                            
                        </div>
                    </button>
                </div>
            </div>
        </div>
        <div className='flex items-center justify-center'>
            <div className='border-[1px] w-4/6'>
                <Comment />  
            </div>
        </div>
    </div>
  )
}

export default ProductDetails