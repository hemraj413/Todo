import React, { useState } from 'react'

const Menu = () => {
    const[activeMenu,setActiveMenu] = useState('all')
    const[activeCategory,setCategory] = useState('all')
  return (
    <>
    <h3 className="text-4xl p-2">Filter Todos</h3>
    <h6 className='text-gray-500 text-sm'>General</h6>
    <ul className="menus">
    <li className={activeMenu=='all'?`bg-violet-600 text-white scale-110 `:`bg-gray-300 text-gray-700`} onClick={()=>{setActiveMenu('all')}} >All Todos</li>
    <li className={activeMenu=='completed'?`bg-violet-600 text-white scale-110`:`bg-gray-300 text-gray-700`} onClick={()=>{setActiveMenu('completed')}}>Completed</li>
    <li className={activeMenu=='uncompleted'?`bg-violet-600 text-white scale-110`:`bg-gray-300 text-gray-700`} onClick={()=>{
        setActiveMenu("uncompleted")
    }}>Uncompleted</li>
    </ul>
    <h6 className='text-gray-500 text-sm'>Category</h6>
    <div className="menus-category m-2">
    <span className={activeCategory=='all'?`bg-violet-600 text-white scale-110 `:`bg-gray-300 text-gray-700`} onClick={()=>{setCategory('all')}} >All</span>
    <span className={activeCategory=='work'?`bg-violet-600 text-white scale-110`:`bg-gray-300 text-gray-700`} onClick={()=>{setCategory('work')}}>work</span>
    <span className={activeCategory=='school'?`bg-violet-600 text-white scale-110`:`bg-gray-300 text-gray-700`} onClick={()=>{
        setCategory("school")
    }}>school</span>
    <span className={activeCategory=='coding'?`bg-violet-600 text-white scale-110`:`bg-gray-300 text-gray-700`} onClick={()=>{
        setCategory("coding")
    }}>coding</span>
    </div>

  </>
  )
}

export default Menu