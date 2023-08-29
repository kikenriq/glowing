import React from 'react'
import logo1 from '../assets/images/pay.png'

const Footer = () => {
  return (
    <footer className=' w-screen px-10 flex flex-col gap-12'>
        <div>
            <a href="#" className='text-[20px] text-black font-semibold'>Company</a>
            <p className='text-[14px]'>Find a location nearest you. See <a href="#">Our Stores</a></p>
            <h3 className='text-[14px] font-semibold text-black'>+391 (0)35 2568 4593</h3>
            <p className='text-[14px]'>hello123@email.com</p>
        </div>

        <div>
            <h1 className='text-[20px] mb-3 text-black font-semibold'>Useful links</h1>
            <ul className='flex flex-col gap-2'>
                <li><a className='text-[15px]' href="#">New Products</a></li>
                <li><a className='text-[15px]' href="#">Best Sellers</a></li>
                <li><a className='text-[15px]' href="#">Bundle & Save</a></li>
                <li><a className='text-[15px]' href="#">Online Gift Card</a></li>
            </ul>
        </div>

        <div>
            <h1 className='text-[20px] mb-3 text-black font-semibold'>Information</h1>
            <ul className='flex flex-col gap-2'>
                <li><a className='text-[15px]' href="#">Start a Return</a></li>
                <li><a className='text-[15px]' href="#">Contact Us</a></li>
                <li><a className='text-[15px]' href="#">Shipping FAQ</a></li>
                <li><a className='text-[15px]' href="#">Terms & Conditions</a></li>
                <li><a className='text-[15px]' href="#">Privacy Policy</a></li>
            </ul>
        </div>

        <form className='flex flex-col gap-4'>
            <h1 className='text-5xl font-semibold text-black'>Good emails.</h1>
            <p className='text-[14px]'>Enter your email bellow tobe the first to know about new collection and product launchers.</p>

            <div className='flex'>
             <input className='text-[15px] ' type="email" name="" placeholder='Enter your email address' id="" />
             <button className='bg-black px-5 py-2 font-semibold text-[18px] text-white'>Suscribe</button>
            </div>
        </form>

        <div>
            <img src={logo1} alt="" />
        </div>
    </footer>
  )
}

export default Footer