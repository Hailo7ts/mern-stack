import express from "express";

import { createPost, deletePost, getPosts, getPost, editPost} from "../controllers/postControllers.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
//router.put("/edit/:id", updatePost);
router.get("/:id", getPost)
//router.get("/edit/:id", getEditPage)
router.post("/edit/:id", editPost)
router.delete("/:id", deletePost);

export default router;
