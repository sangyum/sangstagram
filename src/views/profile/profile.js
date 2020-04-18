import React from 'react';
import ProfilePosts from './profileposts';

const renderProfile = (post) => {
    return (
        <ProfilePosts post={post} />
    )
}

const Profile = ({ posts = [] }) => {

    return (
        <>
            {posts.map(post => renderProfile(post))}
        </>
    )
}

export default Profile;
