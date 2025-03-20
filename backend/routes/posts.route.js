import { Router } from "express";
import Posts from "../models/posts.model.js";

const postRoutes  = Router();

postRoutes.get("/getallPosts" , async(req , res)=>{
    try {
        const posts = await Posts.find();
        res.send(posts)
    } catch (error) {
        console.log(error)
    }
})

postRoutes.post("/addPosts" , async(req , res)=>{
    let {id , userid , content}  = req.body;

    try {
        const insertPost = await Posts.create({
            id:id,
            userid:userid,
            content:content
        })
        if(!insertPost){
            return res.send("Bad Request")
        }
        res.send({
            success:true,
            "post":insertPost
        })
    } catch (error) {
        console.log(error)
        res.send("Internal server error")
    }

})
postRoutes.post("/addManyPosts" , async(req , res)=>{
    if (!Array.isArray(req.body)) {
      return res.status(400).json({
        success: false,
        message: "Send an array of objects",
      });
    }

    try {
      const post = await Posts.insertMany(req.body);
      if (!post) {
        return res.send("Sorry something went wrong");
      }
      res.status(200).json({
        success: true,
        posts: post,
      });
    } catch (error) {
      res.status(500).send("Internal server error");
    }
})
postRoutes.get("/getComByusertId/:id/comment", async (req, res) => {
  let id = req.params.id;
  try {
    const comment = await Posts.findOne({
    userid: id,
    });
    res.send(comment);
  } catch (error) {
    res.send("Internal server error");
  }
});

export default postRoutes;