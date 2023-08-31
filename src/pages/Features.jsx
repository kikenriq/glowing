import React from 'react'
import feat1 from '../assets/images/feature-1.jpg'
import feat2 from '../assets/images/feature-2.jpg'
import feat3 from '../assets/images/feature-3.jpg'

const Features = () => {
  return (
    <div className='pt-20 lg:mb-16 px-10 flex flex-col h-auto'>
        <div className='px-2 text-center'>
            <h1 className='text-black font-semibold text-4xl'>Why Shop with Glowing</h1>
        </div>
        
        <ul className='pt-20 grid gap-14 md:grid-cols-2 lg:grid-cols-3'>
            <li>
                <div className='flex flex-col text-center items-center'>
                    <img className='w-28 mb-5' src={feat1} alt="" />
                    <div>
                        <h1 className='text-[30px] mb-4 text-black font-semibold'>Guaranteed Pure</h1>
                        <p className='text-[15px] '>All grace formulations adhere to stric purity standards and will never contain harsh or toxic ingredients</p>
                    </div>
                </div>
            </li>
            <li>
                <div className='flex flex-col text-center items-center'>
                    <img className='w-28 mb-5' src={feat2} alt="" />
                    <div>
                        <h1 className='text-[30px] mb-4 text-black font-semibold'>Guaranteed Pure</h1>
                        <p className='text-[15px] '>All grace formulations adhere to stric purity standards and will never contain harsh or toxic ingredients</p>
                    </div>
                </div>
            </li>
            <li>
                <div className='flex flex-col text-center items-center'>
                    <img className='w-28 mb-5' src={feat3} alt="" />
                    <div>
                        <h1 className='text-[30px] mb-4 text-black font-semibold'>Guaranteed Pure</h1>
                        <p className='text-[15px] '>All grace formulations adhere to stric purity standards and will never contain harsh or toxic ingredients</p>
                    </div>
                </div>
            </li>

            

        </ul>
        
    </div>
  )
}

export default Features