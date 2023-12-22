import Nav from '@/components/Nav'
import TodoList from '@/components/TodoList'
import Image from 'next/image'
import Link from 'next/link'
import {AiFillDelete,AiFillEdit} from 'react-icons/ai'

export default function Home() {
  return (
    <div className='md:max-w-[1200px] max-w-[640px] m-auto  '>
      <TodoList />

    </div>
  )
}
