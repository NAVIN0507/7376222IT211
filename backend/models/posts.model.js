import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    id:{type:String , required:true},
    userid:{type:Number , ref:'User' , required:true},
    content:{type:String , required:true}
})
const Posts = mongoose.model('Posts' , postSchema);

export default Posts