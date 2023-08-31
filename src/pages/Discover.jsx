import React from 'react'
import blog1 from '../assets/images/blog-1.jpg'
import blog2 from '../assets/images/blog-2.jpg'
import blog3 from '../assets/images/blog-3.jpg'

const Discover = () => {
  return (
    <div className='pt-[60px] px-10'>
        <div>
            <h1 className='text-[40px] font-semibold text-center text-black'>More to Discover</h1>
        </div>

        <ul className='pt-[50px] grid md:grid-cols-2 lg:grid-cols-3 md:gap-10'>
            <li>
                <div className='flex flex-col pt-10 gap-4 items-center'>
                    <figure className='max-w-[450px] overflow-hidden'>
                        <img className='transition duration-300 ease-in-out hover:scale-110' src={blog1} alt="" />
                    </figure>
                    <h2 className='text-black font-semibold'>Find a Store</h2>
                    <p className='text-[18px] font-semibold text-black'>Our Store</p>
                </div>
            </li>
            <li>
                <div className='flex flex-col pt-10 gap-4 items-center'>
                    <figure className='max-w-[450px] overflow-hidden'>
                        <img className='transition duration-300 ease-in-out hover:scale-110' src={blog2} alt="" />
                    </figure>
                    <h2 className='text-black font-semibold'>Find a Store</h2>
                    <p className='text-[18px] font-semibold text-black'>Our Store</p>
                </div>
            </li>
            <li>
                <div className='flex flex-col pt-10 gap-4 items-center'>
                    <figure className='max-w-[450px] overflow-hidden'>
                        <img className='transition duration-300 ease-in-out hover:scale-110' src={blog3} alt="" />
                    </figure>
                    <h2 className='text-black font-semibold'>Our Story</h2>
                    <p className='text-[18px] font-semibold text-black'>Our Store</p>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Discover