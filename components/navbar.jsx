import Link from 'next/link';
import { useState } from 'react';

import Image from 'next/image'

export default function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex items-center flex-wrap p-3 text-xl'>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mx-4 '>
          <Image 
                className='profile'
                src='/linkedinprofilepic.jpg'
                alt='Mitchell Marino Profile Picture'
                height={50}
                width={50}
              />
              <style global jsx>{`
                .profile {
                  border-radius: 50%;
                }
              `}</style>
            <span className='text-2xl ml-2 text-black font-bold uppercase tracking-wide'>
              Mitchell Marino
            </span>
          </a>
        </Link>
        <button
          className=' inline-flex p-3  rounded lg:hidden text-black ml-auto hover:text-[#2F4858] outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto'>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black px-5 font-bold items-center justify-center  hover:text-[#2F4858] '>
                Home
              </a>
            </Link>
            <Link href='#skills'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black px-5 font-bold items-center justify-center  hover:text-[#2F4858]'>
                Skills
              </a>
            </Link>
            <Link href='#projects'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black px-5 font-bold items-center justify-center  hover:text-[#2F4858]'>
                Projects
              </a>
            </Link>
            <Link href='#contact'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black px-5 font-bold items-center justify-center  hover:text-[#2F4858]'>
                Contact
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black px-5 font-bold items-center justify-center  hover:text-[#2F4858]'>
                Resume
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
              
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};