import { firebase } from '../firebase';
import postsDAL from './dataAccess/posts';

const convertComment = (comment) => {
    return {
        ...comment,
        createdAt: comment.createdAt.toDate()
    }
}

const convertComments = (comments) => comments.map(comment => convertComment(comment));

const convertPost = (post) => {
    const { comments, createdAt, ...rest } = post;

    return {
        ...rest,
        comments: comments ? convertComments(comments) : [],
        createdAt: createdAt.toDate()
    }
}

const convertPosts = (posts) => posts.map(post => convertPost(post));

const getAll = () => {
    return new Promise((resolve, reject) => {
        postsDAL.getAll()
            .then(posts => resolve(convertPosts(posts)))
            .catch(reject)
    })
};

const saveComment = (user, post, comment) => {

    const { name, userAvatar } = user;
    const { comments, ...rest } = post;
    const { text } = comment;

    const convertedComments = comments.map(({ createdAt, ...rest }) => ({
        ...rest,
        createdAt: firebase.firestore.Timestamp.fromDate(createdAt)
    }));

    convertedComments.push({
        createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
        createdBy: name,
        userAvatar,
        text
    });

    const updatedPost = {
        ...rest,
        comments: convertedComments
    };

    postsDAL.update(updatedPost);
}

export {
    getAll,
    saveComment
}