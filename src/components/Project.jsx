import React from 'react'
import ProjectItem from './ProjectItem'
 import { ProjectList } from '../helper/ProjectList'
 
const Project = () => {
  return (
    <div name='project' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
        <h1 className='text-4xl font-bold inline border-b-4 text-gray-300 border-blue-300'>
          Work
        </h1>
        <p className='py-6'> Check out some of my recent work</p>
      </div>
      {/* Container */}
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
{ProjectList.map((project)=>{
    return (
        <ProjectItem  name={project.name} image={project.image} demo={project.demo} code={project.source}  />
    )
})}

</div>

        </div>
        
    </div>
  )
}

export default Project