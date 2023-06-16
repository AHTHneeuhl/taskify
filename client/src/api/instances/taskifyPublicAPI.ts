import axios from "axios";

const taskifyPublicAPI = axios.create({
  baseURL: "http://localhost:8080",
});

export default taskifyPublicAPI;
