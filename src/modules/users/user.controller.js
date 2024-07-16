import { commentModel } from "../../database/models/comment.model.js"
import { postModel } from "../../database/models/post.model.js"
import { userModel } from "../../database/models/user.model.js"
const signUp=async (req,res)=>{

    await userModel.create(req.body)

    res.status(201).json({message:"success"})
}
const signIn=async(req, res)=>{
    await userModel.update({loginStatus:1},{where:{email:req.body.email}})
    res.status(200).json({message:"login success"})

}
const signOut=async(req, res)=>{
    const {id}=req.query
    await userModel.update({loginStatus:0},{where:{id}})
    res.status(200).json({message:"logOut success"})

}



const getAllUsers=async (req, res)=>{
    const users=await userModel.findAll(
        {
           include:{
            model:postModel,
            attributes:["title"]

           } 
            
    })
    res.status(200).json(users)
}






export{
    signUp,signIn,getAllUsers,signOut
}