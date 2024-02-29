import React, { useState } from 'react'
import logo from '../assets/logo.png'
import avt from '../assets/user.png'
import './Header.css'
import { 
    getAuth,
    signOut,
} from "firebase/auth";
import { removeUser } from '../redux/Slice';
import { toast } from 'react-toastify';
import { MdShoppingCart } from 'react-icons/md';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    const closeDropdown = () => {
        setIsOpen(false);
    };

    const products = useSelector((state) => state.cart.products);
    const userInfo = useSelector((state) => state.cart.userInfo);
    
    const dispatch = useDispatch();
    const auth = getAuth();
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                dispatch(removeUser());
                toast.success("Log Out Successfully!");
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
    <div className='w-full text-1xl h-16 bg-white border-[1px] sticky top-0 z-50'>
        <div className='grid grid-cols-7 px-40'>
            <div className='flex items-center justify-center cursor-pointer'>
                <Link to="/">
                    <img className='w-14 h-14' src={logo} alt="logo" />
                </Link>
            </div>
            <div className='flex items-center justify-center hover:bg-black hover:text-white duration-300 cursor-pointer'>
                <Link to="/">
                    Trang chủ
                </Link>
            </div>
            <div className='flex items-center justify-center hover:bg-black duration-300 cursor-pointer'>
                <div className="dropdown">
                    <p className="dropdown-btn-product hover:text-white" onClick={handleToggle}>
                        Sản phẩm
                    </p>
                    {isOpen && (
                    <div className="dropdown-content-product">
                        <Link to='/products/phone'><p onClick={closeDropdown}>Điện thoại</p></Link>
                        <Link to='/products/tablet'><p onClick={closeDropdown}>Máy tính bảng</p></Link>
                        <Link to='/products/laptop'><p onClick={closeDropdown}>Laptop</p></Link>
                        <Link to='/products/headphone'><p onClick={closeDropdown}>Phụ kiện</p></Link>
                        <Link to='/products/watch'><p onClick={closeDropdown}>Đồng hồ</p></Link>
                    </div>
                    )}
                </div>
            </div>
            <div className='flex items-center justify-center hover:bg-black hover:text-white duration-300 cursor-pointer'>
                Tin tức
            </div>
            <div className='flex items-center justify-center hover:bg-black hover:text-white duration-300 cursor-pointer'>
                Liên hệ
            </div>
            <div className='flex items-center justify-center hover:bg-black hover:text-white duration-300'>
                <Link to='/cart'>
                    <div className='flex items-center'>
                        <MdShoppingCart className='text-2xl'/>
                        <span className='mb-5'>
                            {products.length}
                        </span>
                    </div>
                    
                </Link>
            </div>
            <div className='flex items-center justify-center gap-3'>
                <div className="dropdown">
                {userInfo ? (
                    <button className="dropdown-btn-user" onClick={handleToggle}>
                        <img className='w-12 h-12 rounded-full object-cover' src={userInfo.image} alt='user' />
                    </button>
                ) : (
                    <Link to="/login">
                        <img className='w-12 h-12 rounded-full object-cover' src={avt} alt="logo" />
                    </Link>
                )}
                {isOpen && userInfo && (
                    <div className="dropdown-content-user">
                        <p >Thông tin</p>
                        <p onClick={handleSignOut}>Đăng xuất</p>
                    </div>
                )}
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Header