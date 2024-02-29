import React, { useEffect, useState } from 'react'
import { MdOutlineClose } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { resetCart } from '../redux/Slice';
import { decrementQuantity, incrementQuantity, deleteItem } from '../redux/Slice';
import { Link } from 'react-router-dom';

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart.products);
    const [totalAmt, setTotalAmt] = useState("");
    useEffect(() => {
        let price = 0;
        products.map((item) => {
          price += item.price * item.quantity;
          return price;
        });
        setTotalAmt(price);
      }, [products]);
  return (
    <div>
        <div className='grid grid-cols-3 ml-20'>
            <div className='col-span-2'>
                <h1 className='text-xl font-semibold mt-6'>Giỏ hàng</h1>
                {products.map(items => (
                <div key={items.id}>
                   <div className='border-[1px] my-2 mr-7 px-2'>
                        <div className='grid grid-cols-6 my-4 items-center'>
                            <Link to={`/product/${items.id}`}>
                                <img className='w-20 h-20 object-cover' src={items.img} alt="" />
                            </Link>
                            <p className='col-span-2'>{items.name}</p>
                            <div>
                                <button
                                className='border-[1px] px-3'
                                onClick={()=>
                                    dispatch(
                                        decrementQuantity({
                                            id: items.id,
                                            name: items.name,
                                            category: items.category,
                                            img: items.img,
                                            price: items.price,
                                            quantity: 1,
                                            desc: items.desc,
                                        })
                                    )
                                }
                                >
                                    -
                                </button>
                                <span className='px-3'>{items.quantity}</span>
                                <button
                                className='border-[1px] px-3'
                                onClick={()=>
                                    dispatch(
                                        incrementQuantity({
                                            id: items.id,
                                            name: items.name,
                                            category: items.category,
                                            img: items.img,
                                            price: items.price,
                                            quantity: 1,
                                            desc: items.desc,
                                        })
                                    )
                                }
                                >
                                    +
                                </button>
                            </div>
                            <p>{items.quantity * items.price}đ</p>
                            <p 
                            onClick={()=>dispatch(deleteItem(items.id))}
                            className='flex justify-end mr-8 cursor-pointer'>
                                <MdOutlineClose />
                            </p>
                        </div>
                    </div> 
                </div>
                ))}
                <div>
                <button 
                className='bg-black text-white py-1 px-2 rounded-md hover:bg-slate-700 duration-300'
                onClick={()=> dispatch(resetCart()) }>
                    Reset Cart
                </button>
                </div>
            </div>
            <div className='ml-2'>
                <h1 className='text-xl font-semibold mt-6'>Thanh toán</h1>
                <div className='border-[1px] w-5/6 px-6 py-5 my-2'>
                    <div className='my-2'>
                        <h1 className='my-2'>Tổng: {totalAmt}đ</h1>
                        <h1 className='my-2'>Phí vận chuyển: miễn phí</h1>
                        <h1 className='my-2 font-bold'>Thành tiền: {totalAmt}đ</h1>
                    </div>
                    <button className='bg-black text-white px-2 py-1 rounded-md hover:bg-slate-700 duration-300 my-2'>Thanh toán</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart