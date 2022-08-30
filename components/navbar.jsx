
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
          <Disclosure.Button className="fixed  top-4 right-4 inline-flex items-center  justify-center rounded-md p-2 text-gray-300 hover:text-[#4D243D]  group">
            <GiHamburgerMenu
              className="h-[40px] w-[40px]"
              aria-hidden="true"
              
            />
          </Disclosure.Button>
          
          <Transition className=""
            enter='transform transition ease-in-out duration-450'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transform transition ease-in-out duration-450 '
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
          >       
            <Disclosure.Panel className="p-6 w-[300px] bg-[#4D243D] h-[3000px] fixed z-20" >
            
              <div className="flex flex-col justify-start item-center ">
                <Disclosure.Button>
                  <a className='inline-flex items-center p-2 mx-4 ' href='#'>
                    <span className='text-xl text-white font-bold uppercase '>
                      Mitchell Marino
                    </span>
                  </a>
                </Disclosure.Button>
                <div className=" my-4 border-b border-gray-100 pb-4">
                  <a href="#about">
                    <Disclosure.Button className="w-full">
                      <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                        <AiOutlineInfoCircle className="text-3xl text-white group-hover:text-white " />
                          <p className='lg:inline-flex text-2xl font-normal lg:w-auto w-full px-3 py-2 rounded text-white text-left px-5 font-bold items-center justify-center  hover:text-[#F3FCF0] '>
                            About
                          </p>
                      </div>
                    </Disclosure.Button>
                  </a>
                  <a href="#skills">
                    <Disclosure.Button className="w-full">
                      <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                        <AiOutlineTool className="text-3xl text-white group-hover:text-white " />
                          <p className='text-2xl font-normal lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white text-left px-5 font-bold items-center justify-center  hover:text-[#F3FCF0] '>
                            Skills
                          </p>
                      </div>
                    </Disclosure.Button>
                  </a>
                  <a href="#projects">
                    <Disclosure.Button className="w-full">
                      <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                        <AiOutlineProject className="text-3xl text-white group-hover:text-white " />
                          <p className='text-2xl font-normal lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white text-left px-5 font-bold items-center justify-center  hover:text-[#F3FCF0] '>
                            Projects
                          </p>
                      </div>
                    </Disclosure.Button>
                  </a>
                  <a href="#contact">
                    <Disclosure.Button className="w-full">
                      <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                        <MdContactPage className="text-3xl text-white group-hover:text-white " />
                          <p className='text-2xl font-normal lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white text-left px-5 font-bold items-center justify-center  hover:text-[#F3FCF0] '>
                            Contact
                          </p>
                      </div>
                    </Disclosure.Button>
                  </a>

                  <a target="_blank" href='/Resume.pdf'  rel="noopener noreferrer" >
                    <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                      <AiOutlineDownload className="text-3xl text-white group-hover:text-white " />
                      <p className='text-2xl font-normal lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white px-5 font-bold items-center justify-center  hover:text-[#F3FCF0]'>
                        Resume
                        
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