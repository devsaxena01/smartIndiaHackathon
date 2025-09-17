import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app=express()
const allowedOrigin=[
    "http://localhost:5173",
]
app.use(cors({
        origin:allowedOrigin,
        credentials:true,
    }))
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended : true, limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
import userRouter from "./routes/user.route.js"
app.use("/api/v1/users",userRouter)
export {app}