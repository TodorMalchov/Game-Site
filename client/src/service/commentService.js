import {request} from '../service/requests'
import constants from './constants.js'

export const getComments = async(forumId) =>{
    const query = new URLSearchParams({
        where: `forumId="${forumId}"`,
        load: `owner=_ownerId:users`
    })
    const result = await request('GET',`${constants.commentURL}?${query}`)

    return result
}

export const postComment = async(forumId,text)=>{
    const createComment = await request('POST',constants.commentURL,{
        forumId,
        text
    })
    return createComment
}