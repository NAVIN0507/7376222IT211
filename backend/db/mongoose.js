import mongoose from "mongoose"
let isConnted = false;
const MONGODB_URL = "mongodb+srv://navinofficial2005:TomCruise@cluster0.qjwkl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

 const connectToDB =  async()=>{
    if(isConnted){
        return console.log("Already Connected to DB")
    }
    try {
        await mongoose.connect(MONGODB_URL);
        isConnted =true;
        console.log("Connected to DB")
    } catch (error) {
        console.log(error)
    }
}

export default connectToDB