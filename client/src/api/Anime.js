import axios from "axios";

export const getRandomQuotes = () =>
  axios.get("https://animechan.vercel.app/api/quotes");

//   url: 'https://anilistmikilior1v1.p.rapidapi.com/getCharacter',
