"use client"
import { fetchdat } from "@/lib/actions";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default function Home() {
  const client = new QueryClient();
  return (
<QueryClientProvider client={client}>
<ListUsers/>
</QueryClientProvider>
  );
}

const ListUsers = ()=>{
  const {data , isLoading , isError} = useQuery({
queryKey:['users'],
queryFn:fetchdat
  })
return(
  <div>
    {JSON.stringify(data)}
  </div>
)
}
