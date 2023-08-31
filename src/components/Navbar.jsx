import React from 'react'
import { useState, useEffect } from 'react'
import Logo from '../assets/images/logo.png'

const Navbar = () => {
    const [mobileNav, setMobileNav] = useState(false)
    const [isActive, setIsActive] = useState(false)

    useEffect(() =>{
        window.addEventListener('scroll', () =>{
          window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
        })
      })

  return (
    <nav className={`${isActive ? 'bg-white fixed z-50 transition-all ease-in-out shadow-lg' : 'bg-white'} w-screen`}>
        <div className=' w-screen bg-[--pale-spring-bud] p-1'>
            <p className='text-black font-bold text-sm text-center'>Free Shipping On All U.S. Orders $50+</p>
        </div>
        <div className='flex flex-row xl:hidden justify-between py-5 px-3'>
            <button onClick={()=>
          setMobileNav(!mobileNav)} className="text-4xl">
                <ion-icon name="reorder-three-outline"></ion-icon>
            </button>

            <a href="#">
                <img className='h-7' src={Logo} alt="" />
            </a>

            <a className='xl:hidden' href="#">
                <ion-icon name="person-outline"></ion-icon>
            </a>
        </div>

        <div className='lg:hidden xl:flex flex flex-row justify-between py-5 px-3'>
                <div>
                        <input type="search" name="" id="" />
                </div>

                <a href="#">
                    <img className='h-7' src={Logo} alt="" />
                </a>

                <div>
                    <a href="#">
                        
                    </a>
                    <a href="#">

                    </a>
                    <a href="#">

                    </a>
                </div>

        </div>



        <div className={`${mobileNav ? 'left-0' : '-left-full'} fixed top-0 transition-all duration-500 bottom-0 z-40 w-screen bg-white h-screen py-[25px] px-[40px]`}>
            <div className='flex flex-row justify-between items-center mb-14'>
                <img className='h-6' src={Logo} alt="" />

                <button className='text-[--hoockers-green] font-bold' onClick={()=>
          setMobileNav(!mobileNav)}>
                    <ion-icon name="close-outline"></ion-icon>
                </button>
            </div>
            <ul className='text-[15px] font-semibold uppercase text-black flex flex-col gap-3'>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Collection</a>
                </li>
                <li>
                    <a href="">Shop</a>
                </li>
                <li>
                    <a href="">Offer</a>
                </li>
                <li>
                    <a href="">Blog</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar