import Post from "../models/Post.js";
import mongoose from "mongoose";

const getPosts = async (req, res) => {
  const posts = await Post.find();
  console.log(posts);
  res.status(200).json(posts);
};

const createPost = async (req, res) => {
  const { title, description, tags, selectedFile } = req.body;
  if (!title || !description)
    return res
      .status(400)
      .json({ message: "Title and description is required." });

  try {
    const newPost = await Post.create({
      title,
      description,
      tags,
      selectedFile,
    });
    await newPost.save();
    res.status(200).json({
      message: "New post created",
      newPost,
    });
  } catch (error) {
    res.status(500).json({
      message: "some error ocured.",
      error,
    });
  }
};

const deletePost = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const isValid = mongoose.Types.ObjectId.isValid(id);
  try {
    if (!isValid)
      return res.status(400).json({
        message: "Invalid post or id.",
      });
    await Post.findByIdAndRemove(id);
    res.status(200).json({
      message: "Deleted succesfully",
    });
  } catch (error) {
    console.log("eror", error);
  }
};

const likePost = async (req, res) => {
  const postId = req.params.id;
  const userId = req.userId;
  const currentPost = await Post.findById(postId);
  await Post.findByIdAndUpdate(postId, {
    ...currentPost,
    likes: currentPost.likes.push(userId),
  });
  res.status(200).json({
    message: "Liked the post.",
  });
};

const dislikePost = async (req, res) => {
  const postId = req.params.id;
  const userId = req.userId;
  const currentPost = await Post.findById(postId);
  await Post.findByIdAndUpdate(postId, {
    ...currentPost,
    likes: currentPost.likes.filter((id) => id !== userId),
  });
  res.status(200).json({
    message: "Disliked the post.",
  });
};
export { createPost, getPosts, deletePost, likePost, dislikePost };
