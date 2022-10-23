import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:5000" });

api.interceptors.request.use((req) => {
  const tokenToBeSent = localStorage.getItem("user") || null;
  if (tokenToBeSent) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("user")).token
    }`;
  }

  return req;
});

export const loginUser = (formData) => api.post("/auth/login", formData);
export const registerUser = (formData) => api.post("/auth/register", formData);

export const createPost = (formData) => api.post("/posts", formData);
export const fetchPosts = () => api.get("/posts");

export const deletePost = (id) => api.delete(`/posts/${id}`);
export const likePost = (id) => api.patch(`/posts/like/${id}`)
export const disLikePost = (id) => api.patch(`/posts/dislike/${id}`)
