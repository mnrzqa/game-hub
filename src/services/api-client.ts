import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2aa3eee911de4ca19a803b4bdde59a14",
  },
});
