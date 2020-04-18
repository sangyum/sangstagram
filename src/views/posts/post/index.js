import React from 'react';
import AvatarAndUser from './avatarAndUser';
import Photo from './photo';
import CaptionAndDate from './captionAndDate';
import Comments from './comments';
import CommentField from './commentfield'

const Post = ({post, saveComment }) => {
    const {photoUrl, caption, createdAt, comments, userAvatar, createdBy} = post;

    return (
        <>
            <AvatarAndUser userAvatar={userAvatar} createdBy={createdBy} />
            <Photo photoUrl={photoUrl} />
            <CaptionAndDate caption={caption} createdAt={createdAt} />
            <Comments comments={comments} userAvatar={userAvatar} createdAt={createdAt} createdBy={createdBy} />
            <CommentField saveComment={(comment) => saveComment(post, comment)} />
        </>
    )
}

export default Post;