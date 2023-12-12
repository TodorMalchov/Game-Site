import {request} from '../service/requests'
import constants from './constants.js'

export const getComments = async() =>{
    const result = await request('GET',constants.commentURL)

    return Object.values(result)
}

export const postComment = async(forumId,username,text)=>{
    const createComment = await request('POST',constants.commentURL,{
        forumId,
        username,
        text
    })
    return createComment
}