import Image from 'next/image'
import {skillList} from '../utils/skillList'

export default function Skills() {
    
    return (
        <div className="pb-10" id="skills">
        <h2 className='text-5xl pt-20'>SKILLS</h2>
           <div className="grid grid-cols-3  lg:grid-cols-6 justify-center place-items-center">
                {skillList.map((skill, index) => {
                    return (
                        <div key={`skill-${index}`}className="flex  flex-col text-2xl text-[#020122]  my-4  w-[150px] rounded-2xl justify-center hover:translate-y-2">
                            <div className='mb-3 mx-auto relative w-[40px] sm:w-[75px] md:w-[90px] lg:w-[110px] xl:w-[150px]'>
                                    {skill.icon}
                            </div>
                                    <p className='text-center text-lg '>{skill.name}</p>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}