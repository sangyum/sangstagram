import React from 'react';
import { range } from 'lodash';
import faker from 'faker';
import Followers from './followers';

const generateFollowers = (numberOfFollowers) => {
    return range(numberOfFollowers).map(() => ({
        userAvatar: faker.image.avatar(),
        createdBy: faker.internet.userName(),
    }))
}

const FollowersContainer = () => {
    const followers = generateFollowers(10);

    return (
        <Followers followers={followers} />
    )
}

export default FollowersContainer;