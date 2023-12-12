import constants from './constants.js'
import { request } from './requests.js'

export const getAll = async()=>{
    const response = await request('GET',constants.forumURL)
    return Object.values(response)
}

export const getOneComment = async(forumId)=>{
    const respose = await request('GET', constants.forumURL+`${forumId}`)
    return respose
}


export const create = async(forumData)=>{
    const response = await request('POST',constants.forumURL, forumData)
    return response
}