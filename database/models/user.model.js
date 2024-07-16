import { DataTypes } from "sequelize";
import { sequelize } from "../dbConnection.js";



export const userModel=sequelize.define("users",{
    name:{
        type:DataTypes.STRING(100),
        allowNull:false

    },
    email:{
        type:DataTypes.STRING(100),
        unique:true,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING(100)
    },
    loginStatus:{
        type:DataTypes.BOOLEAN,
        defaultValue:false,
        allowNull:false
    }
    
},{
    timestamps:true,
})




