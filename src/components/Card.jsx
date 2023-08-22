import React from 'react'
import Card1 from '../assets/images/collection-1.jpg'
import Card2 from '../assets/images/collection-1.jpg'
import Card3 from '../assets/images/collection-1.jpg'



const Card = (props) => {
  return (
    <div className='max-w-[350px] h-[350px] relative'> 
        <img className='absolute w-full object-cover transition duration-500 hover:scale-110' src={props.images} alt="" />
        <div className='relative px-10 py-12'>
            <h2 className='font-semibold text-black text-3xl'>{props.title} </h2>
            <p className=' text-black text-[18px] font-semibold'>{props.price}</p>
            <a className='text-black text-lg font-semibold mt-36' href="#">{props.bottom}</a>
        </div>
    </div>
  )
}

export default Card