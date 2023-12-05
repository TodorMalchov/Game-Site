import constants from './constants.js'
import { request } from './requests.js'

export const getAll = async()=>{
    const response = await request(constants.GET,constants.forumURL)
    return Object.values(response)
}


export const create = async(forumData)=>{
    const response = await fetch(constants.forumURL,{
        method: constants.POST,
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(forumData)
    })
    const result = await response.json()
    return result
}