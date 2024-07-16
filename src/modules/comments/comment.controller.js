import { commentModel } from "../../database/models/comment.model.js"
import { postModel } from "../../database/models/post.model.js"
import { userModel } from "../../database/models/user.model.js"

const addcomment=async (req,res)=>{
    let {userId}=req.body
    let user=await userModel.findOne({where:{id:userId,loginStatus:true}})
    if (!user) return res.status(404).json({message:"User not found or not logged in"})
    await commentModel.create(req.body)

    res.status(201).json({message:"success"})
}
const getAllcomments=async (req,res)=>{
    let comments=await commentModel.findAll({
        include:[{ 
            model:postModel
        }]
    })

    res.json({message:"success",comments:comments})
}

const updateComment=async (req,res)=>{
        await postModel.update({postId:req.body.postId,content:req.body.content,userId:req.body.userId},{
            where:{
                id:req.params.id
            }
        })
        res.json({message:"updated"})
}
const deletecomment=async (req,res)=>{
        await postModel.destroy({
            truncate:true
        })
        res.json({message:"deleted"})
}


export{
    addcomment,getAllcomments,updateComment,deletecomment
}