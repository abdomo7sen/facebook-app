import { commentModel } from "../../database/models/comment.model.js"
import { postModel } from "../../database/models/post.model.js"
import { userModel } from "../../database/models/user.model.js"


const addPost=async (req,res)=>{
    const{title,content,author}=req.body

    let user=await userModel.findOne({where:{id:author,loginStatus:true}})
    if (!user) return res.status(404).json({message:"User not found or not logged in"})
    await postModel.create(req.body)
    res.status(201).json({message:"success"})
}
const getAllPosts=async (req,res)=>{
    let posts=await postModel.findAll({
        include:[{
            model:userModel

        }]
    })

    res.json({message:"success",posts:posts})
}
const getOnePost=async (req,res)=>{
    let posts=await postModel.findOne({
        include:[{
            model:userModel,
            
        }],where:{
            id:req.params.id
        },
    })

    res.json({message:"success",posts:posts})
}

const updatePost=async (req,res)=>{
    let user=await userModel.findOne({where:{id:author,loginStatus:true}})
    if (!user) return res.status(404).json({message:"User not found or not logged in"})
        await postModel.update({title:req.body.title,content:req.body.content},{
            where:{
                id:req.params.id
            }
        })
        res.json({message:"updated"})
}
const deletePost=async (req,res)=>{
    let user=await userModel.findOne({where:{id:author,loginStatus:true}})
    if (!user) return res.status(404).json({message:"User not found or not logged in"})
        let deletePost=await postModel.update({Deleted:1},{where:{
            id:req.params.id
        }})
        
        res.json({message:"deleted",deletePost})
}

const userPostAndComment=async(req,res)=>{
    let user=await userModel.findAll({
        include:{
            model:postModel,
            attributes:{
                exclude:[`updatedAt`,`createdAt`]
            },
           
            include:{
                model:commentModel,
                attributes:["content","id"],
                
            }
        }
    })
    res.json({message:"a7a",user})
}

export{
    addPost,getAllPosts,updatePost,deletePost,getOnePost,userPostAndComment
}