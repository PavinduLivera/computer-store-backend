import express from "express"
import mongoose from "mongoose"
import userRouter from "./routes/userRouter.js"
import productRouter from "./routes/productRouter.js"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()


const mongoURI = process.env.MONGO_URL

mongoose.connect(mongoURI).then(
    ()=>{
        console.log("Connected to Cluster")
    }
)

//console.log("Hello World")

const app = express()

app.use(cors())

app.use(express.json())

app.use(
    (req,res,next)=>{

        const authorizationHeader = req.header("Authorization")

        if(authorizationHeader != null){

            const token = authorizationHeader.replace("Bearer ", "")

            // console.log(token)

            jwt.verify(token, process.env.JWT_SECRET,
                (error, content)=>{

                    if(content == null){

                        console.log("invalid token")

                        res.status(401).json({
                            message : "invalid token"
                        })

                        return

                    } else {
                        // console.log(content)

                        req.user = content
                        next()

                    }
                }
            )

        } else {
            next()
        }

    }
) 
  
app.use("/api/users", userRouter)
app.use("/api/products",productRouter)

app.listen(3000 ,
    ()=>{
        console.log("Server Starting... Running...")
    }
)