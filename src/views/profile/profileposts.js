import React from 'react';
import Box from '@material-ui/core/Box';

const ProfilePosts = ({ post }) => {
    const { photoUrl } = post
    
    return (
        <Box m={1} p={1}>
            <img className='PostPic' alt='Woo' src={photoUrl} />
        </Box>
    )
}

export default ProfilePosts;
