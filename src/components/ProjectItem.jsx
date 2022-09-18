import React from 'react'
const ProjectItem = ({image,name ,demo,code }) => {
  return (
    <div>
        {/* Grid Item */}
    <div
    style={{ backgroundImage: `url(${image})` }}
    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
    >
    {/* Hover Effects */}
    <div className='opacity-0 group-hover:opacity-100'>
    <span className='text-2xl font-bold text-white tracking-wider'>
    {name}
    </span>
  
    <div className='pt-8 text-center'>
       <a href={demo}>
          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
        Demo
        </button>
     </a>
     <a href={code}>
      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
        Code
      </button>
       </a>
       
             </div>

  
</div>

</div>
    </div>
  )
}

export default ProjectItem