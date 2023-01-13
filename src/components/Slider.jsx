import React from 'react'
// swiper package import 
import {Swiper,SwiperSlide} from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

  // import Swiper and modules styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

// images
import food1 from '../assets/food1.jpg'
import food2 from '../assets/food2.jpg'
import food4 from '../assets/food4.jpg'


const SliderProducts = [
   
    {
        img: food2,
        caption: 'Slide 3'
      }, {

        img: food1,
        caption: 'Slide 4'
      }, {

        img: food4,
        caption: 'Slide 5'
      },
  ];


const Slider = () => {
    return (
        <div className=' max-w-[1400px] md:h-[480px] h-[380px] mt-96  w-full  relative group' >
        <Swiper modules={[Navigation,Pagination] }
        className='justify-center text-center items-center'
        loopFillGroupWithBlank={true}
        navigation={true}
        slidesPerView={3} spaceBetween={10} slidesPerGroup={1} loop={true}
        breakpoints={{
          640:{
            slidesPerView:3,
          },
          0:{
            slidesPerView:1,
          }
        }}
        >
         {SliderProducts.map((slide,i)=>(
          <SwiperSlide className=' justify-center  items-center '  key={slide.caption}>
                          
                <img src={slide.img} alt="product" className='w-full h-full bg-center   rounded-2xl  bg-cover duration-500' />
                                
          </SwiperSlide>
         ))}
          
        </Swiper>
    </div>
       
      )
}

export default Slider
