"use client"

import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { useRouter } from 'next/navigation';


const DeleteBtn = ({id}) => {

    const router =useRouter()
const removeTopic=async()=>{
    const confirmed=confirm('Are you sure')
    if(confirmed){
        const res = await fetch(`http://localhost:3000/api/topics?id=${id}`,{
            method:"DELETE",
        })

        if(res.ok){
            router.refresh()
        }
    }
}


  return (
    <button onClick={removeTopic} >
     <AiFillDelete  className='cursor-pointer text-lg' />

    </button>
  );
}

export default DeleteBtn;
