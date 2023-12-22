'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";


const EditTopicForm = ({id,title,description}) => {
const [newTitle, setNewTitle] = useState(title);
const [newDescription, setNewDescription] = useState(description);

const router = useRouter()

const handleSubmit=async(e)=>{
  e.preventDefault()
  try {
    const res=await fetch(`http://localhost:3000/api/topics/${id}`,{
      method:"PUT",
      headers:{
        "Content-type":"application/json",

      },
      body:JSON.stringify({newTitle,newDescription})
    })

    if (!res.ok) {
      throw new Error('Failed to update')
    }
    router.refresh()
    router.push('/')
  } catch (error) {
    console.log(error)
  }
}

    return (
        <div className="md:max-w-[1240px] max-w-[640px] m-auto  ">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4 text-xl">
            <input onChange={(e)=>setNewTitle(e.target.value)}
            value={newTitle}
              className="border border-slate-600"
              type="text "
              placeholder="Enter Title"
            />
            <input onChange={(e)=>setNewDescription(e.target.value)}
            value={newDescription}
              className="border border-slate-600"
              type="text"
              placeholder="Enter Description"
            />
            <button
              type="submit "
              className="rounded-lg bg-orange-400 w-fit p-2 hover:bg-orange-500 "
            >
              Update Notes
            </button>
          </form>
        </div>
      );
    }

export default EditTopicForm;
