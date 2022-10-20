import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoutes.js"
const app = express();

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/auth", authRoutes);
app.use('/posts', postRoutes)

mongoose
  .connect("mongodb://localhost:27017/animeDatabase")
  .then(() => {
    app.listen("5000", () => {
      console.log("Backend listening at port 5000.");
    });
  })
  .catch((error) =>
    console.log(
      "ERROR IS:",
      error,
      "---AND---ERROR_MESSAGE IS---",
      error.message
    )
  );
