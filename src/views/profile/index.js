import React from 'react';
import { range } from 'lodash';
import faker from 'faker';
import Profile from './profile';

const generatePosts = (numberOfPosts) => {
    return range(numberOfPosts).map(() => ({
        photoUrl: faker.image.nature(),
    }))
}

const ProfileContainer = () => {
    const posts = generatePosts(2);

    return (
        <Profile posts={posts} />
    )
}

export default ProfileContainer;