import constants from './constants.js'
import { request } from './requests.js'

export const getAll = async()=>{
    const response = await request('GET',constants.forumURL)
    return Object.values(response)
}

export const getOneComment = async(forumId)=>{
    const respose = await request('GET', `http://localhost:3030/jsonstore/forum/01b4aa7d-2046-4cb6-9b7e-cf3d11f71135`)
    return respose
}


export const create = async(forumData)=>{
    const response = await request('POST',constants.forumURL, forumData)
    return response
}