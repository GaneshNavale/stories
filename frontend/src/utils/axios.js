import axios from 'axios';

let instance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    // 'Authorization': `Bearer ${localStorage.key('stories_token')}`
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
});

export default instance;