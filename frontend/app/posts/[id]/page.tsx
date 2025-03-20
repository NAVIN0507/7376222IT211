"use client"
import { fetchPost, fetchuserbyId } from '@/lib/actions';
import { platform } from 'os';
import React, { useEffect, useState } from 'react'

const page = ({params}:{params : {id:string}}) => {
const [post, setpost] = useState<any | null>(null);
const [uses, setuses] = useState(null);
const [commetns, setcommetns] = useState(null)
useEffect(()=>{
const fetchdata = async()=>{
    const res  = await fetchPost(params.id);
    const user = await fetchuserbyId(params.id);
    setuses(user)
    setpost(res)
}
fetchdata();
} , [params.id])
if(post===null){
    return <div className='text-center mt-20'>No Post</div>
}
  return (
    <div className='text-black  w-[800px] ml-20 mt-20 h-[300px] shadow-2xl rounded-xl'>
      <div className='mt-8 ml-10'>
        <h1 className='text-3xl p-10 font-mono'>Post by {uses} 📱:</h1>
        <h2 className="ml-10 text-2xl">{post}</h2>
        <h1 className='ml-10 mt-10 text-2xl'>Comments : </h1>
        <h2 className='ml-10 mt-2 text-2xl'>No comments</h2>
      </div>
    </div>
  )
}

export default page