import { Router } from "express";
import Comments from "../models/comments.models.js";

const commentsRoutes = Router();

commentsRoutes.get("/getallcomments", async (req, res) => {
  try {
    const posts = await Comments.find();
    res.send(posts);
  } catch (error) {
    console.log(error);
  }
});

commentsRoutes.post("/addComment", async (req, res) => {
  let { id, postid, content } = req.body;

  try {
    const insertPost = await Comments.create({
      id: id,
      postid: postid,
      content: content,
    });
    if (!insertPost) {
      return res.send("Bad Request");
    }
    res.send({
      success: true,
      post: insertPost,
    });
  } catch (error) {
    console.log(error);
    res.send("Internal server error");
  }
});
commentsRoutes.post("/addManycomments", async (req, res) => {
  if (!Array.isArray(req.body)) {
    return res.status(400).json({
      success: false,
      message: "Send an array of objects",
    });
  }

  try {
    const post = await Comments.insertMany(req.body);
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
});
commentsRoutes.get("/getComByPostId/:id/comment" , async(req , res)=>{
    let id = req.params.id
    try {
        const comment = await Comments.findOne({
            postid:id
        })
        res.send(comment)
    } catch (error) {
        res.send("Internal server error")
    }
})

export default commentsRoutes;
