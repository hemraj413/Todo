import { useState } from "react"

  type SaveButton={
    backBtn:()=>void,
    handleSaveClick : (title:string,description:string,category:string,color:string)=>void
  }


const AddNewTodo = ({handleSaveClick, backBtn}:SaveButton) => {
    const[title,setTitle] = useState('')
    const[description,setDescription] = useState('')
    const[category,setCategory] = useState('default')
    const[color,setColor] = useState('default')

 
  return (
        <>
        <button onClick={backBtn} className="bg-white text-2xl">🔙</button>
        <div className="my-4 title">
            <label htmlFor="title" className="text-2xl">Title </label>
            <br />
            <input type="text" id="title" className="py-2 px-4" value={title} onChange={(e)=>setTitle(e.target.value)} />
        </div>
        <div className=" my-4 description">
            <label htmlFor="description" className="text-2xl">Description</label>
            <br />
            <textarea name="description" id="description" className="h-40 w-8/12 resize-none" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
        </div>
        <aside className="flex">
            
        <div className="category-class">
            <label htmlFor="category" >category</label>
            <br />
        <select name="category" id="category" title="category" className="scale-125 m-2 mr-6" value={category} onChange={(e)=>setCategory(e.target.value)}>
        <option value="default" >default</option>
            <option value="work">work⚒️</option>
            <option value="school">school🏫</option>
            <option value="coding">coding👩‍💻</option>
        </select>
        </div>
        <div className="color-class">
            <label htmlFor="color">color</label>
            <br />

        <select name="color" id="color" title="color" className="scale-125 m-2" value={color} onChange={(e)=>setColor(e.target.value)}>
        <option value="default">default</option>
            <option value="green" className="bg-green-300">green</option>
            <option value="red" className="bg-red-300">red</option>
            <option value="yellow" className="bg-yellow-300">yellow</option>
        </select>
        </div>
        </aside>


        <br />
      <button type="button" className="bg-purple-500 px-6 py-2 shadow-md shadow-purple-800 hover:bg-purple-600 text-white" onClick={()=>{
        if(title.trim()!==''){
            handleSaveClick(title,description,category,color)
            setTitle(''); setCategory('default'); setDescription(''); setColor('normal')
            }}}>
                save todo</button>

        </>
  )
}

export default AddNewTodo