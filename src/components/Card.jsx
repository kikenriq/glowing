import React from 'react'
import Card1 from '../assets/images/collection-1.jpg'
import Card2 from '../assets/images/collection-1.jpg'
import Card3 from '../assets/images/collection-1.jpg'



const Card = (props) => {
  return (
    <div className='min-h-[400px] px-3'> 

        <div className='absolute z-30 px-10'>
            <h2 className=' font-semibold text-black text-3xl'>{props.title} </h2>
            <p className=' text-black text-xl font-semibold mb-32'>{props.price}</p>
            <a href="#">{props.bottom}</a>
        </div>
        <img className='w-full' src={props.images} alt="" />
    </div>
  )
}

export default Card