import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectToDB from "./db/mongoose.js"
import userRoute from "./routes/user.route.js"
import postRoutes from "./routes/posts.route.js"
const app = express()
dotenv.config();
app.use(express.json())
app.use(cors())
connectToDB();
app.get("/" , (req , res)=>{
    res.send("test")
})
app.use("/api/v1/users" , userRoute);
app.use("/api/v1/posts" , postRoutes)

app.listen(8000 , ()=>{console.log("Connected to port 3000")})

