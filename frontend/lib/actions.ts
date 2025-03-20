import axios from "axios";

export const fetchdat = async()=>{
    const response = await axios.get("http://localhost:8000/api/v1/users/getallUsers")

    return response.data
}