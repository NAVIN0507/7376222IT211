import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
<header className='h-14 rounded-b-md w-full bg-white'>
    <nav className='flex justify-between items-center p-3'>
        <h1 className='text-black font-mono text-2xl'>MNS POSTS</h1>
        <ul className='space-x-7 text-black hidden md:flex '>
         <Link href={"/"}>   <li  className='hover:underline hover:cursor-pointer hover:-translate-y-2 ease-in-out duration-500'>Home</li></Link>
        <Link href={"/posts"}> <li className='hover:underline hover:cursor-pointer hover:-translate-y-2 ease-in-out duration-500'>Posts</li></Link>   
          <Link href={"/comments"}>  <li className='hover:underline hover:cursor-pointer hover:-translate-y-2 ease-in-out duration-500'>Comments</li></Link>
        </ul>
    </nav>

</header>
  )
}

export default NavBar