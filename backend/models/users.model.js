import mongoose from "mongoose";
const userSchema =  new mongoose.Schema({
    id:{type:String , required:true},
    name:{type:String , required:true}
})

const User = mongoose.model('User' , userSchema);

export default User