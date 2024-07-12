'use client'

import { useState } from "react"

import AddNewTodo from "./components/AddNewTodo"
import TodoItem from "./components/TodoItem"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Menu from "./components/Menu"
import Time from "./components/Time"

interface Todo {
  title:string,
  description:string,
  category:string,
  color:string,
  isComplete:false,


}

export default function Home() {
  const[todos,setTodos]= useState<Todo[]>([])
  const[addTodoPage,setAddTodoPage] = useState(false)
  



  function handleSaveClick(title:string,description:string,category:string,color:string){
    setAddTodoPage(false)
    const newTodo: Todo = {
      title,
      description,
      category,
      color,
      isComplete:false

    }
    setTodos([...todos,newTodo])

}



  return (
    <>
    <main className={`block overflow-y-scroll overflow-x-hidden`} >
      <section className={addTodoPage?'-translate-x-200':"translate-x-0"}>
        <div className="">
        <h1 className="text-3xl">Todos</h1>
        <div className="w-fulll flex justify-between m-4">
          <Time/>
        <button type="button" className={`bg-purple-500 px-4 py-2 shadow-md shadow-purple-800 hover:bg-purple-600 text-white`} onClick={()=>setAddTodoPage(true)} >+ new task</button>

        </div>

        </div>
        <div className="w-full">
        {todos.map((todo)=>(
          <TodoItem isComplete={todo.isComplete} title={todo.title} category={todo.category} description={todo.description} color={todo.color}/>
        ))}
        </div>


      </section>
    <section className={`${addTodoPage?'translate-x-0':'translate-x-200' } add-todos-class`} >

      <AddNewTodo backBtn={()=>setAddTodoPage(false)} handleSaveClick={handleSaveClick} />

      </section>
      {!addTodoPage?<aside className="w-1/3 relative top-0 left-2/3 h-full aside-element ">
      <Menu/>

      
      <div className="todo-detail">

      <span className="px-6 py-2 bg-slate-200 rounded-md ">👳‍♂️  Jhon</span>
      </div>

      </aside>:<></>}

    </main>
    
    
    </>
   
  )}