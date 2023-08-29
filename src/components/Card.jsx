import React from 'react'
import Card1 from '../assets/images/collection-1.jpg'
import Card2 from '../assets/images/collection-1.jpg'
import Card3 from '../assets/images/collection-1.jpg'



const Card = (props) => {
  return (
    <div className='relative h-[400px] overflow-hidden'>
        <div className='absolute z-30 px-10 py-12'>
            <h2 className='font-semibold text-black text-3xl'>{props.title} </h2>
            <p className=' text-black text-[18px] font-semibold'>{props.price}</p>
            <button>
                <a className='text-black text-lg font-semibold mt-36' href="#">{props.bottom}</a>
            </button>
        </div>
        <img className=' h-full w-full object-cover transition duration-300 ease-in-out hover:scale-125' src={props.images} alt="" />
    </div>
  )
}

export default Card