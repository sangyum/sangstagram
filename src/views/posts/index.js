import React from 'react';
import { useQuery } from 'react-query'
import Posts from './posts';
import { getAll, saveComment } from '../../actions/posts';
import { CircularProgress } from '@material-ui/core';

const PostsContainer = ({ user }) => {

    const { status, data, error } = useQuery('posts', getAll);

    if (status === 'loading') {
        return (
            <CircularProgress />
        )
    }

    if (error) {
        return (
            <p>{error.message}</p>
        )
    }

    return (
        <Posts posts={data} saveComment={(post, comment) => saveComment(user, post, comment)}/>
    )
}

export default PostsContainer;
