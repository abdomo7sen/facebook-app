import express from 'express'
import { sequelize } from './database/dbConnection.js'
import userRouter from './modules/users/user.routes.js'
import { postRouter } from './modules/posts/post.routes.js'
import { commentRouter } from './modules/comments/comment.routes.js'
const app = express()
const port = 3000





sequelize.sync({alter: true,forignKeys:false})


app.use(express.json())

app.use("/users",userRouter)
app.use("/posts",postRouter)
app.use("/comments",commentRouter)
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))