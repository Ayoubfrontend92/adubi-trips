import React,{useState} from 'react'
import { navLinks } from '../constants'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import {MdOutlineClose} from 'react-icons/md'

const Navbar = () => {
    const [nav ,setNav]=useState(false)
    const navHandler = (prev)=>{
        setNav(prev=>!prev)
    }
    
  return (
    <div className='absolute w-full flex justify-between items-center  p-4 md:p-10'>
      <h1 className='text-white font-bold text-2xl font-mono z-20 '>Adubi Trips</h1>

       {nav ?<MdOutlineClose className='z-20 text-white  cursor-pointer ' size={25}  onClick={navHandler}/> :<HiOutlineMenuAlt3 onClick={navHandler} className='z-20 text-white  cursor-pointer'  size={25}/>}

      <div className={nav ? 
      'ease-in duration-300 fixed text-gray-400 bg-black/90	 z-10 top-0 left-0 w-full px-4 py-7 flex-col h-screen':
      'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'}>

        <div className='list-none flex flex-col fixed h-screen w-full justify-center items-center'>
            {navLinks.map((nav,id)=>(
                <li
                    className='hover:text-white font-bold text-2xl p-8'
                    >
                 <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar
