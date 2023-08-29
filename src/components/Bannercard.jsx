import React from 'react'

const Bannercard = (props) => {
  return (
    <div className='relative h-[450px] overflow-hidden'>
        <div className='absolute z-30 px-8 py-16'>
            <p className=' text-black text-[18px] font-semibold'>{props.subtitle}</p>
            <h2 className='font-semibold text-black text-4xl'>{props.title} </h2>
            <a className='text-black shadow-md text-[16px] bg-white inline-block px-4 py-2 font-semibold mt-10' href="#">{props.bottom}</a>
        </div>
        <img className=' h-full w-full object-cover transition duration-300 ease-in-out hover:scale-125' src={props.images} alt="" />
    </div>
  )
}

export default Bannercard