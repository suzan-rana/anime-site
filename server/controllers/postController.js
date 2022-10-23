import Post from "../models/Post.js";
import User from "../models/User.js";
import mongoose from "mongoose";

const getPosts = async (req, res) => {
  const posts = await Post.find();
  res.status(200).json(posts);
};

const createPost = async (req, res) => {
  
  const { title, description, tags, selectedFile } = req.body;
  const userId = req.userId;
  if (!title || !description)
    return res
      .status(400)
      .json({ message: "Title and description is required." });

  try {
    const Creater = await User.findById(userId);
    const creater = await Creater.name;
    console.log(creater);
    const newPost = await Post.create({
      title,
      description,
      tags,
      selectedFile,
      creater,
      createrId: userId,
    });
    console.log(newPost);
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
  console.log(currentPost)
  const updatedPost = await Post.findByIdAndUpdate(postId, {
    ...currentPost,
    likeStatus: true,
    likes: currentPost.likes.push(userId),
  });
  console.log(updatedPost);

  res.status(200).json({
    message: "Liked the post.",
  });
};

const dislikePost = async (req, res) => {
  const postId = req.params.id;
  const userId = req.userId;
  const currentPost = await Post.findById(postId);
  console.log(currentPost)
  await Post.findByIdAndUpdate(postId, {
    ...currentPost,
    likes: currentPost.likes.filter((id) => id !== userId),
    likeStatus: false,
  });
  res.status(200).json({
    message: "Disliked the post.",
  });
};
export { createPost, getPosts, deletePost, likePost, dislikePost };
