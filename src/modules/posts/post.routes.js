import { Router } from "express";
import { addPost, deletePost, getAllPosts, getOnePost, updatePost, userPostAndComment } from "./post.controller.js";


export const postRouter =Router()

postRouter.route('/').post(addPost).get(getAllPosts)
postRouter.get('/userPostAndComment',userPostAndComment )


postRouter.route("/:id").put(updatePost).delete(deletePost).get(getOnePost)