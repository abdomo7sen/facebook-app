import { Router } from "express";
import { addcomment, deletecomment, getAllcomments, updateComment } from "./comment.controller.js";

export const commentRouter=Router()

commentRouter.route("/").post(addcomment).get(getAllcomments)

commentRouter.route("/:id").put(updateComment).delete(deletecomment)