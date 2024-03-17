import axios from "./axios";

export const getUser = (id, params = {}) => {
  return axios.get(`/login/${id}`, { params: params });
};

export const getUsers = (params = {}) => {
  return axios.get("/login", { params: params });
};

export const updateUser = (id, params = {}) => {
  return axios.put(`/signup/edit/${id}`, { user: params });
};

export const createUser = (params = {}) => {
  return axios.post("/signup", { user: params });
};

export const createPost = (data = {}) => {
  return axios.post("/api/v1/posts", { data: data });
};

export const getPost = (id, params = {}) => {
  console.log("get Post");

  return axios.get(`/api/v1/posts/${id}`, { params: params });
};

export const login = (params = {}) => {
  return axios.post("/login", { user: params });
};
