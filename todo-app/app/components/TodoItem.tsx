import React, { useState } from 'react'
interface Todo{
    title:string,
    description:string,
    category:string,
    color:string
  isComplete:boolean
  
  }
  

const TodoItem = (todo:Todo,) => {
  const[showMenus,setShowMenus] = useState(false)
  return (
    <div className={`rounded-lg flex align-baseline shadow-sm shadow-gray-600 my-2 p-4 w-full ${todo.color!=='normal'?`bg-${todo.color}-300`:`bg-gray-200`} todo-item`}>
      <div className="checkbox">
      <input aria-label='checkbox' type='checkbox' className='scale-150 m-2 '/>

      </div>
      <div className="detail">

        <h2 className=' text-2xl'>{todo.title}</h2>
        <h5 className=' text-xs opacity-75'>{todo.description.length>30?todo.description.substring(0,30):todo.description}</h5>
        <span className='rounded-xl p-1 bg-slate-50 border-spacing-3 text-sm'>{todo.category}</span>
        </div>
        <div className="relative bottom-1/4 cursor-pointer text-2xl three-dot rotate-90" onClick={()=>setShowMenus(!showMenus)}>
          {showMenus?'<':">"}
        </div>
       
        {/* {showDelete?<button className='relative bottom-1/2 cursor-pointer rounded-xl text-sm bg-gray-400 px-4 delete-todo-btn'>delete</button>:<></>} */}
{/* cancelable when click outside */}


    </div>
  )
}

export default TodoItem