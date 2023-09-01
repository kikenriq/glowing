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
    <header className={`${isActive ? 'bg-white fixed z-50 transition-all ease-in-out shadow-lg' : 'bg-white'} justify-center w-screen `}>
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

        <div className='hidden xl:flex items-center flex-row justify-between py-5 px-3'>
                <div className='flex py-[10px] px-[20px] relative text-xl border border-[--hoockers-green]'>
                        <input className='text-[18px] w-full' placeholder='Search' type="search" name="" id="" />
                        <button className='absolute right-[15px] text-[30px]'>
                            <ion-icon className='' name="search-outline"></ion-icon>
                        </button>
                </div>

                <a href="#">
                    <img className='h-7' src={Logo} alt="" />
                </a>

                <div className='flex text-3xl gap-5 items-center stroke-2'>
                    <a href="#">
                         <ion-icon name="person-outline"></ion-icon>
                    </a>
                    <a href="#">
                        <ion-icon name="star-outline"></ion-icon>
                    </a>
                    <div className='flex items-center gap-1'>
                        <p className='text-[18px]'>0.00$</p>
                        <a href="#">
                            <ion-icon className='' name="bag-outline"></ion-icon>
                        </a>
                    </div>
                </div>

        </div>

        <nav className={`${isActive ? 'bg-white absolute z-50 transition-all ease-in-out shadow-lg' : 'bg-white'} hidden xl:flex justify-center w-screen `}>
            <ul className='flex justify-center py-3 items-center gap-8 text-black text-[15px]'>
                <li><a className='hover:text-[--hoockers-green]' href="#">Home</a></li>
                <li><a className='hover:text-[--hoockers-green]' href="#">About</a></li>
                <li><a className='hover:text-[--hoockers-green]' href="#">Products</a></li>
                <li><a className='hover:text-[--hoockers-green]' href="#">Blog</a></li>
                <li><a className='hover:text-[--hoockers-green]' href="#">Contact</a></li>
            </ul>
        </nav>



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
    </header>
  )
}

export default Navbar