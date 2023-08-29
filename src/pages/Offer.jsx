import React from 'react'
import offer1 from '../assets/images/offer-banner-1.jpg'
import offer2 from '../assets/images/offer-banner-2.jpg'

const Offer = () => {
  return (
    <div className='px-10 pt-20'>
        <div className='flex gap-7 justify-center items-center'>
            <img className='h-[150px] md:h-[350px]' src={offer1} alt="" />
            <img className='h-[250px] md:h-[550px]' src={offer2} alt="" />
        </div>

        <div className='pt-[100px]'>
            <p className='text-[18px] uppercase text-black flex items-center'>Special Offer<span className='text-white mx-1 px-3 text-[15px] rounded-[3px] bg-[--hoockers-green]'>-20$</span></p>
            <h1 className='text-black font-semibold text-[40px] my-4'>Mountain Pine Bath Oil</h1>
            <p className=' text-[18px]'>Made using clean, non-toxic ingredients, our products are designed for everyone.</p>

            <h1 className='py-8 text-[--hoockers-green] text-5xl'>15 : 21 : 46 : 08</h1>

            <button className='bg-black text-white text-[18px] px-6 py-2'>Get only $39.00</button>
        </div>
    </div>
  )
}

export default Offer