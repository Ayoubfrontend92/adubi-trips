import React from 'react'
import {OffersList} from '../constants/index'







const Offers = () => {
  return (
    <div className='sm:max-w-[900px] text-center justify-center  mt-5   flex-col m-auto sm:px-4 sm:py-12 sm:flex sm:flex-row sm:flex-wrap sm:justify-between'>
      {OffersList.map((list)=>(
        <>
        <img className='w-8 h-8 ml-[47%] sm:ml-0 m-1  '  src={list.img} alt="img" />
        <p className=' m-1 p-2  text-lg font-bold text-gray-700'>{list.title}</p>
        </>
      ))}
    </div>
  )
}

export default Offers
