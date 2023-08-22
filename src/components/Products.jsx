import React from 'react'
import product1 from '../assets/images/product-01.jpg'
import product2 from '../assets/images/product-02.jpg'
import product3 from '../assets/images/product-03.jpg'
import product4 from '../assets/images/product-04.jpg'
import Items from './Items'


const Products = () => {
  return (
    <div className='px-4 pt-20'>
        <div className='flex flex-col'>
            <h1 className='text-black font-semibold text-[33px]'>Our Bestsellers</h1>
            <p className='text-[15px] gap-1 font-semibold pt-5 text-black flex items-center'>Shop All Products <span><ion-icon name="arrow-forward"></ion-icon></span></p>
        </div>

        <div>
            <ul>
                <li>
                    <Items
                    title='Facial cleanser' 
                    price='$4.11'
                    images={product1}
                    review='5170 reviews'
                    />
                </li>
                <li>
                    <Items
                    title='Facial cleanser' 
                    price='$4.11'
                    images={product2}
                    review='5170 reviews'
                    />
                </li>
                <li>
                    <Items
                    title='Facial cleanser' 
                    price='$4.11'
                    images={product3}
                    review='5170 reviews'
                    />
                </li>
                <li>
                    <Items
                    title='Facial cleanser' 
                    price='$4.11'
                    images={product1}
                    review='5170 reviews'
                    />
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Products