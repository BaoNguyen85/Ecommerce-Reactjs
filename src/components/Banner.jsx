import React, { useCallback, useEffect, useState } from 'react'
import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'
import { HiArrowRight, HiArrowLeft } from "react-icons/hi"

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [banner1, banner2, banner3];
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1);
    };
    const nextSlide = useCallback(() => {
        setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1);
    }, [currentSlide]);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 2000);

        return () => clearInterval(interval);
    }, [nextSlide]);

    
  return (
    <div className='overflow-x-hidden'>
        <div className='relative'>
            <div 
            style={{ transform: `translateX(-${currentSlide * 100}vw)` }} 
            className='w-[400vw] h-full flex transition-transform duration-1000'
            >
                <img className='w-screen h-[850px] object-fit' src={data[0]} alt="banner1" />
                <img className='w-screen h-[850px] object-fit' src={data[1]} alt="banner2" />
                <img className='w-screen h-[850px] object-fit' src={data[2]} alt="banner3" />
            </div>
            <div className='absolute inset-x-0 flex justify-center bottom-0 mb-9'>
            <div className='flex gap-2'>
                <div onClick={prevSlide} className='w-14 h-12 flex items-center
                justify-center hover:cursor-pointer bg-gray-300 hover:text-white hover:bg-blue-500
                active:bg-gray-900 duration-300'>
                    <HiArrowLeft />
                </div>
                <div onClick={nextSlide} className='w-14 h-12 flex items-center
                justify-center hover:cursor-pointer bg-gray-300 hover:text-white hover:bg-blue-500
                active:bg-gray-900 duration-300'>
                    <HiArrowRight />
                </div>
            </div>
        </div>
        </div>
    </div>
    
  )
}

export default Banner