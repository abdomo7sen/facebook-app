
import { DataTypes } from "sequelize";
import { postModel } from "./post.model.js";
import { sequelize } from "../dbConnection.js";
import { userModel } from "./user.model.js";



export const commentModel=sequelize.define("comment",{
    content:{
        type:DataTypes.STRING(100)
    }
})

userModel.hasMany(commentModel,{foreignKey:"userId",onDelete:"cascade",onUpdate:"cascade"})
commentModel.belongsTo(userModel)


postModel.hasMany(commentModel,{foreignKey:"postId",onDelete:"CASCADE",onUpdate:"CASCADE"})
commentModel.belongsTo(postModel)

