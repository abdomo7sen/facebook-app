import { userModel } from "../database/models/user.model.js"
import bcrypt from "bcrypt"


const checksignUpEmail=async(req,res,next)=>{
    
    let {email} = req.body
    
    let match=await userModel.findOne({where: {email: email}})
    console.log(match);
    if (!match) {
        req.body.password=await bcrypt.hash(req.body.password,8)
        console.log();
        return next()
    }else{
        res.status(401).json({message:"email must be unique"})
    }


}

const checksignInEmail=async(req,res,next)=>{
    
    let {email} = req.body
    
    let {password}=await userModel.findOne({where: {email: email}})
    let match=await bcrypt.compare(req.body.password,password)
        console.log(match);
    if (match) {

        return next()
    }else{
        res.status(401).json({message:"user Not Found"})
    }
}


export{
    checksignUpEmail,checksignInEmail
}