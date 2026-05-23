import {createPost,getAllPosts} from "../controllers/post.controller.js"
import {Router} from 'express';

export const postRouter= Router()

postRouter.route("/post").post(createPost)
.get(getAllPosts)


export default postRouter;