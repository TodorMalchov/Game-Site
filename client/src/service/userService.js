import constants from './constants.js'
import { request } from './requests.js'

export const createUSer = async(forumData)=>{
    const response = await request('POST',constants.forumURL, forumData)
    return response
}