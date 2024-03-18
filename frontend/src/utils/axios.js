import axios from 'axios';

let user = window.localStorage.getItem("stories_user");
user = user ? JSON.parse(user) : null;

let instance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": user?.token,
  },
});

export default instance;