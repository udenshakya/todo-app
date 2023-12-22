import Link from 'next/link';
import React from 'react';

const Nav = () => {
  return (
    <nav className='w-full bg-slate-900 flex justify-between p-3  '>
    <Link href='/' className='font-bold flex justify-center items-center text-white'>TODOS APP</Link>
    <Link href='addnote' className='bg-white rounded-xl py-3 px-2 mr-2 hover:bg-slate-400 transition duration-100 ease-out hover:ease-in'>Add Topic</Link>
  </nav>
);
}

export default Nav;
