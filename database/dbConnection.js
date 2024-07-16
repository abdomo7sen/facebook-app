import { Sequelize } from "sequelize"



const sequelize= new Sequelize("facebookapp","root","",{
    host:"localhost",
    dialect:"mysql"
})

sequelize.authenticate().then(()=>{
    console.log("Connection has been established successfully.")
}).catch((error)=>{ console.log("Error: " + error)})

export{
    sequelize
}