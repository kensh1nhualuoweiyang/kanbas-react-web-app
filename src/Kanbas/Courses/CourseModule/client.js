import axios from "axios"

const url = "http://localhost:4000/api/courses"
const moduleUrl = "http://localhost:4000/api/modules"


export const deleteModule = async (mid) => {
    const response = await axios.delete(`${moduleUrl}/${mid}`)
    return response.data
}


export const findModule = async (cid) => {
    const response = await axios.get(`${url}/${cid}/modules`)
    return  response.data
}

export const createModule = async (cid, item) =>{
    const response = await axios.post(`${url}/${cid}/modules`,item)
    return response.data
} 

export const updateModule = async (module) =>{
    const response = await axios.put(`${moduleUrl}/${module._id}`,module)
    return response.data
}