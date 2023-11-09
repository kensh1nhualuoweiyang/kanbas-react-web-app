import axios from "axios"

const API_BASE = process.env.REACT_APP_API_BASE;
const MODULES_URL = `${API_BASE}/modules`;

const url = "http://localhost:4000/api/courses"
const moduleUrl = "https://kanbas-node-server-app-chen-f1c054a4dcda.herokuapp.com/api/modules"


export const deleteModule = async (mid) => {
    const response = await axios.delete(`${moduleUrl}/${mid}`)
    return response.data
}


export const findModule = async (cid) => {
    const response = await axios.get(`${url}/${cid}/modules`)
    return response.data
}

export const createModule = async (cid, item) => {
    const response = await axios.post(`${url}/${cid}/modules`, item)
    return response.data
}

export const updateModule = async (module) => {
    const response = await axios.put(`${moduleUrl}/${module._id}`, module)
    return response.data
}