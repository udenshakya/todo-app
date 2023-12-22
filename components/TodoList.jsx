import Link from 'next/link';
import React from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import DeleteBtn from './DeleteBtn';

const getTopics=async()=>{
  try {
    const res= await fetch('http://localhost:3000/api/topics',{
      cache:'no-store',
    })
    if(!res.ok){
      throw new Error('Failed to fetch topics')
    }
    return res.json()
  } catch (error) {
    console.log('error lodaing topics',error)
  }
}


const TodoList =async () => {

const {topics} =await getTopics()

  return (
    <>
    {topics.map(t=>(
    <div key={t.title} className='mt-4 flex border border-b-orange-300 p-4 h-40 justify-between'>
    <div>
    <h1 className='font-bold text-2xl'>{t.title}</h1>
    <p>{t.description}</p>

    </div>
    <div className='flex gap-3 justify-center items-center'>
      <DeleteBtn id={t._id} />
      <Link href={`/editnote/${t._id}`}><AiFillEdit className='cursor-pointer text-lg'/></Link>
    </div>
  </div>
  ))}
  </>
);
}

export default TodoList;
