import React from 'react'
import product1 from '../assets/images/product-01.jpg'
import product2 from '../assets/images/product-02.jpg'
import product3 from '../assets/images/product-03.jpg'
import product4 from '../assets/images/product-04.jpg'
import product5 from '../assets/images/product-05.jpg'
import product6 from '../assets/images/product-06.jpg'
import product7 from '../assets/images/product-07.jpg'
import product8 from '../assets/images/product-08.jpg'
import product9 from '../assets/images/product-09.jpg'
import product10 from '../assets/images/product-10.jpg'
import product11 from '../assets/images/product-11.jpg'
import product15 from '../assets/images/product-15.jpg'
import Items from '../components/Items'


const Products = () => {
  return (
    <div className='px-4 pt-20 h-auto'>
        <div className='flex flex-col xl:flex-row xl:justify-between'>
            <h1 className='text-black font-semibold text-[33px]'>Our Bestsellers</h1>
            <p className='text-[15px] gap-1 font-semibold pt-5 text-black flex items-center'>Shop All Products <span><ion-icon name="arrow-forward"></ion-icon></span></p>
        </div>

        <div>
            <ul className='flex overflow-x-auto gap-16 pb-5 xl:gap-8'>
                <li className='min-w-full md:min-w-[calc(50%-15px)] lg:min-w-[calc(33.33%-20px)] xl:min-w-[calc(20%-24px)]'>
                    <Items
                    title='Facial cleanser' 
                    price='$4.11'
                    images={product1}
                    review='5170 reviews'
                    />
                </li>
                <li className='min-w-full md:min-w-[calc(50%-15px)] lg:min-w-[calc(33.33%-20px)] xl:min-w-[calc(20%-24px)]'>
                    <Items
                    title='Facial cleanser' 
                    price='$4.11'
                    images={product2}
                    review='5170 reviews'
                    />
                </li>
                <li className='min-w-full md:min-w-[calc(50%-15px)] lg:min-w-[calc(33.33%-20px)] xl:min-w-[calc(20%-24px)]'>
                    <Items
                    title='Facial cleanser' 
                    price='$4.11'
                    images={product3}
                    review='5170 reviews'
                    />
                </li>
                <li className='min-w-full md:min-w-[calc(50%-15px)] lg:min-w-[calc(33.33%-20px)] xl:min-w-[calc(20%-24px)]'>
                    <Items
                    title='Facial cleanser' 
                    price='$4.11'
                    images={product4}
                    review='5170 reviews'
                    />
                </li>
                <li className='min-w-full md:min-w-[calc(50%-15px)] lg:min-w-[calc(33.33%-20px)] xl:min-w-[calc(20%-24px)]'>
                    <Items
                    title='Facial cleanser' 
                    price='$4.11'
                    images={product5}
                    review='5170 reviews'
                    />
                </li>
                <li className='min-w-full md:min-w-[calc(50%-15px)] lg:min-w-[calc(33.33%-20px)] xl:min-w-[calc(20%-24px)]'>
                    <Items
                    title='Facial cleanser' 
                    price='$4.11'
                    images={product6}
                    review='5170 reviews'
                    />
                </li>
            </ul>

            <div className='pt-20 flex items-center justify-between'>
                <h1 className='text-black font-semibold text-[33px]'>Under $25</h1>
                <p className='text-[15px] gap-1 font-semibold pt-5 text-black flex items-center'>Shop All Products <span><ion-icon name="arrow-forward"></ion-icon></span></p>
            </div>
    
            <ul className='flex overflow-x-auto pb-4 gap-16 xl:gap-8'>
                <li className='min-w-full md:min-w-[calc(50%-15px)] lg:min-w-[calc(33.33%-20px)] xl:min-w-[calc(20%-24px)]'>
                    <Items
                    title='Facial cleanser' 
                    price='$4.11'
                    images={product7}
                    review='5170 reviews'
                    />
                </li>
                <li className='min-w-full md:min-w-[calc(50%-15px)] lg:min-w-[calc(33.33%-20px)] xl:min-w-[calc(20%-24px)]'>
                    <Items
                    title='Facial cleanser' 
                    price='$4.11'
                    images={product8}
                    review='5170 reviews'
                    />
                </li>
                <li className='min-w-full md:min-w-[calc(50%-15px)] lg:min-w-[calc(33.33%-20px)] xl:min-w-[calc(20%-24px)]'>
                    <Items
                    title='Facial cleanser' 
                    price='$4.11'
                    images={product9}
                    review='5170 reviews'
                    />
                </li>
                <li className='min-w-full md:min-w-[calc(50%-15px)] lg:min-w-[calc(33.33%-20px)] xl:min-w-[calc(20%-24px)]'>
                    <Items
                    title='Facial cleanser' 
                    price='$4.11'
                    images={product10}
                    review='5170 reviews'
                    />
                </li>
                <li className='min-w-full md:min-w-[calc(50%-15px)] lg:min-w-[calc(33.33%-20px)] xl:min-w-[calc(20%-24px)]'>
                    <Items
                    title='Facial cleanser' 
                    price='$4.11'
                    images={product11}
                    review='5170 reviews'
                    />
                </li>
                <li className='min-w-full md:min-w-[calc(50%-15px)] lg:min-w-[calc(33.33%-20px)] xl:min-w-[calc(20%-24px)]'>
                    <Items
                    title='Facial cleanser' 
                    price='$4.11'
                    images={product6}
                    review='5170 reviews'
                    />
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Products