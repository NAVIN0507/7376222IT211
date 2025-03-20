import { Router } from "express";
import User from "../models/users.model.js";

const userRoute = Router();

userRoute.post("/addUser" , async(req , res)=>{
        if (!Array.isArray(req.body)) {
          return res.status(400).json({
            success: false,
            message: "Send an array of objects",
          });
        }

        // Validate each user object
        const invalidUsers = req.body.filter((user) => {
          return (
            !user.id ||
            !user.name 
          );
        });

        if (invalidUsers.length > 0) {
          return res.status(400).json({
            success: false,
            message: "Some users have invalid data",
            invalidUsers,
          });
        }
        try {
            const postUser = await User.insertMany(req.body)
            if(!postUser){
                return res.send("Sorry something went wrong")
            }
            res.status(200).json({
                success : true,
                users : postUser
            })
        } catch (error) {
            res.status(500).send("Internal server error")
        }
})

userRoute.post("/insertOne" , async(req , res)=>{
    let {id , name} = req.body;
    try {
        const postUser = await User.create({
            id:id,
            name:name
        })
        if(!postUser){
            res.send("sorry some thing went wrong")
        }
        res.send(postUser)
    } catch (error) {
        console.log(error)
    }
})
userRoute.get("/getallUsers" , async(req , res)=>{
    try {
        const users = await User.find();
        res.send(users)
    } catch (error) {
        console.log(error)
        res.send("Internal server error")
    }
})
userRoute.get("/getUserbyId/:id" , async(req , res)=>{
    try {
        
    } catch (error) {
        console.log(error)
        res.send("Internal server error")
    }
})
 export default  userRoute;