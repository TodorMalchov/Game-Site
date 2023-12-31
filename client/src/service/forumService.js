import constants from './constants.js'
import { request } from './requests.js'

export const getAll = async()=>{
    const response = await request('GET',constants.forumURL)
    return response
}

export const getOneComment = async(forumId)=>{
    const respose = await request('GET', constants.forumURL+`${forumId}`)
    return respose
}


export const create = async(forumData)=>{
    const response = await request('POST',constants.forumURL, forumData)
    return response
}

export const edit = async(forumId, forumData)=>{
    const response = await request('PUT',constants.forumURL+`${forumId}`, forumData)
    return response
}

export const del = async(forumId)=> request('DELETE', constants.forumURL+`${forumId}`)