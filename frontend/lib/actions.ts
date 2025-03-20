import axios from "axios";

export const fetchdat = async()=>{
    const response = await axios.get("http://localhost:8000/api/v1/users/getallUsers")

    return response.data
}
export const fetchuserbyId = async(id:string)=>{
    const response = await axios.get(`http://localhost:8000/api/v1/users//getUserbyId/${id}`)

    return response.data.name
}

export const fetchPost = async(id:string)=>{
    const response = await axios.get(`http://localhost:8000/api/v1/posts/getPostByusertId/${id}/comment`)
    
    return response.data.content
}