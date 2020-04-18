import React from 'react';
import faker from 'faker';
import Post from '../views/posts/post';

export default {
    title: 'Post',
    component: Post,
}
const post = {
    userAvatar: faker.image.avatar(),
    photoUrl: faker.image.nature(),
    caption: faker.lorem.paragraph(),
    createdBy: faker.internet.userName(),
    createdAt: faker.date.past(),
}
export const defualtRendering = () => {
    return (
        <Post post={post}/>
    )    
}
