import { Router } from "express"
import {  getAllUsers, signIn, signOut, signUp,} from "./user.controller.js"
import { checksignInEmail, checksignUpEmail} from "../../middleWare/authentication.js"


const userRouter=Router()

userRouter.post("/signup",checksignUpEmail,signUp)
userRouter.get("/signin",checksignInEmail,signIn)
userRouter.patch("/signout",signOut)
userRouter.get("/",getAllUsers)

export default userRouter