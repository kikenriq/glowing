import React from 'react'

const Items = (props) => {
  return (
    <div className='flex flex-col items-center'>
        <div>
            <img className='' src={props.images} alt="" />
        </div>
        <div className='flex flex-col items-center'>
            <h1 className='text-[16px] font-semibold text-black '>{props.price}</h1>
            <p className='text-black text-[15px] mb-2'>{props.title}</p>
                <div className='flex items-center gap-1 text-sm text-[--hoockers-green]'>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                        <div>
                            <p className=' text-base text-gray-500'> {props.review}</p>
                        </div>
                </div>
        </div>
    </div>
  )
}

export default Items