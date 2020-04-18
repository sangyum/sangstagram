import React from 'react';
import Post from './post'

const renderPost = (post, saveComment) => {
    return (
         <Post post={post} saveComment={saveComment} />
    )
}

const Posts = ({ posts = [], saveComment }) => {

    return (
        <>
            {posts.map(post => renderPost(post, saveComment))}
        </>
    )
}

export default Posts;

// const add = (args) => {
//     const { arg1, arg2 } = args;
//     return arg1 + arg2;
// }

// const result = add({ arg1: 1, arg2: 3, arg3: 5})