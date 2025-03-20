import { Router } from "express";
import User from "../models/users.model";

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

 export default  userRoute;