import Post from "../models/Post.js";
const getPosts = async (req, res) => {
  const posts = await Post.find();
  console.log(posts)
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
export { createPost, getPosts }