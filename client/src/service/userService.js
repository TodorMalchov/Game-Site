import constants from './constants.js'
import { request } from './requests.js'

export const login = async(email,password)=>{
    const response = await request('POST', constants.loginUrl, {
        email,
        password
    })
    return response
}

export const register = async(forumData)=>{
    const response = await request('POST',constants.forumURL, forumData)
    return response
}