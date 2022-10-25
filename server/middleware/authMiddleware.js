import jwt from "jsonwebtoken";

const secret = "test";
const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1] || null;
    if (!token)
      return res.status(404).json({
        message: "Invalid token",
      });
    let decodedData = jwt.verify(token, secret);
    req.userId = decodedData?.id;

    next();
  } catch (error) {
    res.status(400).json({message: 'Ssssion expired'})
    console.log(error, "message is:", error.message);
  }
};
export default authMiddleware;
