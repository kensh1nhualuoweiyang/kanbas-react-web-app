import axios from "axios";
const request = axios.create({withCredentials:true})


export const BASE_API = process.env.REACT_APP_BASE_API_URL  || "http://localhost:4000";
console.log(process.env.REACT_APP_BASE_API_URL);
console.log(BASE_API);
export const USERS_API = `${BASE_API}/api/users`;

export const signin = async (credentials) => {
  const response = await request.post( `${USERS_API}/signin`, credentials );
  return response.data;
};


export const account = async () => {
  const response = await request.post(`${USERS_API}/account`)
  console.log(response);
  return response.data
}

export const updateUser = async (user) => {
  const response = await request.put(`${USERS_API}/${user._id}`,user)
  return response.data
}

export const findAllUser = async () =>{
  const response = await request.get(`${USERS_API}`)
  return response.data
}

export const createUser = async (user) =>{
  const response = await request.post(`${USERS_API}`,user)
  return response.data
}

export const findUserById = async (id) => {
  const response = await request.get(`${USERS_API}/${id}`)
  return response.data
}

export const deleteUser = async (id) =>{
  const response = await request.delete(`${USERS_API}/${id}`)
  return response.data
}

export const register = async (item) =>{
  const response = await request.post(`${USERS_API}/signup`,item)
  return response.data
}

export const logOut = async () =>{
  const response = await request.post(`${USERS_API}/signout`)
  return response.data
}