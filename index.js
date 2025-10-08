import express from "express"
import mongoose from "mongoose"
import userRouter from "./routes/userRouter.js"
import productRouter from "./routes/productRouter.js"

const mongoURI = "mongodb+srv://admin:1234@cluster0.3nq8bbi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongoURI).then(
    ()=>{
        console.log("Connected to Cluster")
    }
)

//console.log("Hello World")

const app = express()

app.use(express.json())

app.use(
    (req,res,next)=>{

        const authorizationHeader = req.header("Authorization")

        if(authorizationHeader != null){

            const token = authorizationHeader.replace("Bearer ", "")

            console.log(token)

            jwt.verify(token, "secretKey96$2025",
                (error, content)=>{

                    if(content == mull){

                        console.log("invalid token")

                        res.json({
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
  
app.use("/users", userRouter)
app.use("/products",productRouter)

app.listen(3000 ,
    ()=>{
        console.log("Server Starting... Running...")
    }
)