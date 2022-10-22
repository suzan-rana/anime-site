import express from "express";
const router = express.Router();
import {
  getPosts,
  createPost,
  deletePost,
  likePost,
  dislikePost,
} from "../controllers/postController.js";
import authMiddleware from "../middleware/authMiddleware.js";

router.get("/", getPosts);
router.post("/", authMiddleware, createPost);
router.delete("/:id", authMiddleware, deletePost);

router.patch("/like/:id", authMiddleware, likePost);
router.patch("/dislike/:id", authMiddleware, dislikePost);

export default router;
