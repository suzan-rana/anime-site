import axios from "axios";

export const getRandomQuotes = () => axios.get("https://animechan.vercel.app/api/quotes");