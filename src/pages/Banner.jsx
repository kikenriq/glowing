import React from 'react'
import ban1 from '../assets/images/banner-1.jpg'
import ban2 from '../assets/images/banner-2.jpg'
import Bannercard from '../components/Bannercard'

const Banner = () => {
  return (
    <div className='px-10 pt-28 grid gap-8 md:grid-cols-2'>
        <Bannercard
        images={ban1}
        subtitle='new collection'
        title='Discover Our Autumn SkinCare'
        bottom='Explore More'
        />
        <Bannercard
        images={ban2}
        subtitle='new collection'
        title='25% off Everything'
        bottom='Shop Sale'
        />
        
    </div>

  )
}

export default Banner