import {request} from '../service/requests'
import constants from './constants.js'

export const commentService = async(forumId,username,text)=>{
    const postComment = await request('POST',constants.commentURL,{
        forumId,
        username,
        text
    })
    return postComment
}