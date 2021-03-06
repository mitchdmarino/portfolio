
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure, Transition} from "@headlessui/react";
import {
  MdContactPage
} from "react-icons/md";
import {
  GrContactInfo,
  GrProjects
} from "react-icons/gr"
import {
  AiOutlineProject,
  AiOutlineTool,
  AiOutlineInfoCircle,
  AiOutlineDownload
} from "react-icons/ai"



export default function Navbar() {

  return (
    <>
      <div className=''>
        <Disclosure >
          <Disclosure.Button className="fixed  top-4 right-4 inline-flex items-center  justify-center rounded-md p-2 text-gray-800 hover:text-[#95190C]  group">
            <GiHamburgerMenu
              className="h-[40px] w-[40px]"
              aria-hidden="true"
              
            />
          </Disclosure.Button>
          
          <Transition className=""
            enter='transform transition ease-in-out duration-500 sm:duration-700'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transform transition ease-in-out duration-500 sm:duration-700'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
          >       
            <Disclosure.Panel className="p-6 w-[250px] bg-gray-600 h-[3000px] fixed z-20" >
            
              <div className="flex flex-col justify-start item-center ">
                <Disclosure.Button>
                  <a className='inline-flex items-center p-2 mx-4 ' href='#'>
                    <span className='text-lg text-white font-bold uppercase '>
                      Mitchell Marino
                    </span>
                  </a>
                </Disclosure.Button>
                <div className=" my-4 border-b border-gray-100 pb-4">
                  <a href="#about">
                    <Disclosure.Button className="w-full">
                      <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                        <AiOutlineInfoCircle className="text-2xl text-white group-hover:text-white " />
                          <p className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white text-left px-5 font-bold items-center justify-center  hover:text-[#F3FCF0] '>
                            About
                          </p>
                      </div>
                    </Disclosure.Button>
                  </a>
                  <a href="#skills">
                    <Disclosure.Button className="w-full">
                      <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                        <AiOutlineTool className="text-2xl text-white group-hover:text-white " />
                          <p className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white text-left px-5 font-bold items-center justify-center  hover:text-[#F3FCF0] '>
                            Skills
                          </p>
                      </div>
                    </Disclosure.Button>
                  </a>
                  <a href="#projects">
                    <Disclosure.Button className="w-full">
                      <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                        <AiOutlineProject className="text-2xl text-white group-hover:text-white " />
                          <p className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white text-left px-5 font-bold items-center justify-center  hover:text-[#F3FCF0] '>
                            Projects
                          </p>
                      </div>
                    </Disclosure.Button>
                  </a>
                  <a href="#contact">
                    <Disclosure.Button className="w-full">
                      <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                        <MdContactPage className="text-2xl text-white group-hover:text-white " />
                          <p className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white text-left px-5 font-bold items-center justify-center  hover:text-[#F3FCF0] '>
                            Contact
                          </p>
                      </div>
                    </Disclosure.Button>
                  </a>

                  <a target="_blank" href='/Resume.pdf'  rel="noopener noreferrer" >
                    <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                      <AiOutlineDownload className="text-2xl text-white group-hover:text-white " />
                      <p className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white px-5 font-bold items-center justify-center  hover:text-[#F3FCF0]'>
                        Resume
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </p>
                    </div>
                  </a>
                </div>  
              </div>
            </Disclosure.Panel>
          </Transition>
          
        </Disclosure>
      </div>
    </>
  );
};