import React from 'react';
import room1 from '../assets/room1.jpg'
import room2 from '../assets/room2.jpg'
import room3 from '../assets/room3.jpg'


const Rooms = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-cyan-200/70 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
      <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
        <h3 className='text-2xl font-bold'>Fine Interior Rooms</h3>
        <p className='pt-4'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ipsam
          rerum iusto excepturi similique minus?
        </p>
      </div>

      <div className='grid grid-cols-2 col-span-2 gap-2'>
        <img
        className='row-span-1 object-cover w-full h-full'
          src={room1}
          alt='/'
        />
        <img
        className='row-span-2 object-cover w-full h-full'
          src={room2}
          alt='/'
        />
        <img
        className='object-cover w-full h-full'
          src={room3}
          alt='/'
        />
      </div>
    </div>
  );
};

export default Rooms;