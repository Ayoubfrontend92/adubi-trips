import React from 'react'
import plan1 from '../assets/plan-1.jpg'
import plan2 from '../assets/plan-2.jpg'
import plan3 from '../assets/plan-3.jpg'
import plan4 from '../assets/plan-4.jpg'
import plan5 from '../assets/plan-5.jpg'

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        {/* right side */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img className='row-span-3 object-cover w-full h-full p-2' src={plan3} alt="plan-img" />
        <img className='row-span-2 object-cover w-full h-full p-2' src={plan4} alt="plan-img" />
        <img className='row-span-2 object-cover w-full h-full p-2' src={plan2} alt="plan-img" />
        <img className='row-span-3 object-cover w-full h-full p-2' src={plan1} alt="plan-img" />
        <img className='row-span-2 object-cover w-full h-full p-2' src={plan5} alt="plan-img" />
      </div>
      {/* left side */}
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
        <p className='text-2xl py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, cumque.</p>
        <p className='pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis magnam autem rerum accusamus molestiae recusandae repellat incidunt soluta molestias eaque!</p>
        <div>
        <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
        <button className='bg-black text-white border-black  hover:shadow-xl'>Book Your Trip</button>
      </div>
      </div>
    </div>
  )
}

export default Plan
