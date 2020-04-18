import React from 'react';
import { range } from 'lodash';
import faker from 'faker';
import Following from './following';

const generateFollowing = (numberOfFollowing) => {
    return range(numberOfFollowing).map(() => ({
        userAvatar: faker.image.avatar(),
        createdBy: faker.internet.userName(),
    }))
}

const FollowingContainer = () => {
    const following = generateFollowing(10);

    return (
        <Following following={following} />
    )
}

export default FollowingContainer;