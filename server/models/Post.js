import mongoose from "mongoose";
const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  creater: {
    type: String,
    required: true,
  },
  createrId: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: [String],
  selectedFile: String,
  likes: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model("Post", PostSchema);
