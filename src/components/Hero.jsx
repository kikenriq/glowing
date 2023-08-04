import React from 'react'
import Banner1 from '../assets/images/hero-banner-1.jpg'
import Banner2 from '../assets/images/hero-banner-2.jpg'
import Banner3 from '../assets/images/hero-banner-3.jpg'
import Card from './Card'
import Card1 from '../assets/images/collection-1.jpg'
import Card2 from '../assets/images/collection-2.jpg'
import Card3 from '../assets/images/collection-3.jpg'

const Hero = () => {
  return (
    <>
    <div className='px-4'>
        <div>
            <ul className='flex overflow-x-auto gap-5 snap-x h-3/4 rounded-xl'>
                <li className='h-[550px] min-w-full relative snap-start flex flex-col justify-center'>
                <div className=' absolute px-3 '>
                        <h1 className='text-black font-semibold text-5xl '>Reveal The Beauty of Skin</h1>
                        <p className='text-lg my-4'>Made using clean, non-toxic ingredients, our products are designed for everyone.</p>
                        <h2 className=' text-xl text-black font-semibold mb-8'>Starting at $7.99</h2>
                        <button className=' bg-black text-white font-semibold text-sm px-5 py-2'>
                            Shop Now
                        </button>
                </div>
                <img className='h-full w-full object-cover object-[40%]' src={Banner1} alt="" />
                </li>
                <li className='h-[550px] min-w-full relative snap-start flex flex-col justify-center'>
                <div className=' absolute px-3 '>
                        <h1 className='text-black font-semibold text-5xl '>Reveal The Beauty of Skin</h1>
                        <p className='text-lg my-4'>Made using clean, non-toxic ingredients, our products are designed for everyone.</p>
                        <h2 className=' text-xl text-black font-semibold mb-8'>Starting at $7.99</h2>
                        <button className=' bg-black text-white font-semibold text-sm px-5 py-2'>
                            Shop Now
                        </button>
                </div>
                <img className='h-full w-full object-cover object-[40%]' src={Banner2} alt="" />
                </li>
                <li className='h-[550px] min-w-full relative snap-start flex flex-col justify-center'>
                <div className=' absolute px-3 '>
                        <h1 className='text-black font-semibold text-5xl '>Reveal The Beauty of Skin</h1>
                        <p className='text-lg my-4'>Made using clean, non-toxic ingredients, our products are designed for everyone.</p>
                        <h2 className=' text-xl text-black font-semibold mb-8'>Starting at $7.99</h2>
                        <button className=' bg-black text-white font-semibold text-sm px-5 py-2'>
                            Shop Now
                        </button>
                </div>
                <img className='h-full w-full object-cover object-[40%]' src={Banner3} alt="" />
                </li>
              
                
            </ul>
        </div>
    </div>

    <div>
        <ul>
            <li>
                <Card 
                title='Summer Collection'
                price='Starting at $17.99'
                bottom='Shop now'
                images={Card1}
                />
            </li>
            <li>
                <Card 
                title='Summer Collection'
                price='Starting at $17.99'
                bottom='Shop now'
                images={Card2}
                />
            </li>
            <li>
                <Card 
                title='Summer Collection'
                price='Starting at $17.99'
                bottom='Shop now'
                images={Card3}
                />
            </li>
        </ul>
    </div>
    </>
  )
}

export default Hero