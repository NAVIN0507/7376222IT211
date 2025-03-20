import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    id:{type:String , required:true},
    postid:{type:Number , ref:'Posts' , required:true},
    content:{type:String , required:true}
})
const Comments = mongoose.model('Comments' , commentSchema);

export default Comments