import { DataTypes } from "sequelize";
import { sequelize } from "../dbConnection.js";
import { commentModel } from "./comment.model.js";
import { userModel } from "./user.model.js";

export const postModel=sequelize.define("posts",{
    title:{
        type:DataTypes.STRING(100)
    },
    content:{
        type:DataTypes.STRING(100)
    },
    Deleted:{
        type:DataTypes.BOOLEAN,
        defaultValue:0
    }
    
})

userModel.hasMany(postModel,{foreignKey:"author",onDelete:"CASCADE",onUpdate:"CASCADE"})
postModel.belongsTo(userModel)
