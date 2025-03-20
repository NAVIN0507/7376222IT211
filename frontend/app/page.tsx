"use client"
import { fetchdat } from "@/lib/actions";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const client = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={client}>

      <ListUsers />
    </QueryClientProvider>
  );
}

const ListUsers = () => {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['users'],
    queryFn: fetchdat,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Sorry, something went wrong: {error?.message}</div>;
  }

  if (!data || data.length === 0) {
    return <div>No users found.</div>;
  }

  return (
    <div className="pl-14 mt-20 text-black">
      <h1 className="text-2xl">All Post and Comments 📱</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 mt-8 gap-3">

      {data.map((item: any) => (
                <div className="w-[300px] h-[300px] border-2 border-gray-50 shadow-xl cursor-pointer rounded-xl hover:cursor-pointer hover:-translate-y-2 ease-in-out duration-500"  key={item.id}>
        <div className="items-center justify-center flex flex-col gap-4 ">
          <Image src="/userr.png" alt="log" width={150} height={150} className="mt-4"/>
         <h1>{item.name}</h1>
         <div className="flex">
         <Link href={`/posts/${item.id}`}> <button className="w-[100px] h-[40px] bg-black rounded-lg text-white ">See Posts</button>  </Link>
         </div>
        </div>
              </div>
      ))}

      </div>
    </div>
  );
};
