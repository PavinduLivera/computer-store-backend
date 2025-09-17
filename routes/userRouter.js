import express from "express"

import { createUser, loginUser } from "../controllers/userController.js"

const userRouter = express.Router()

userRouter.post("/",createUser)
userRouter.get("/",loginUser)



export default userRouter