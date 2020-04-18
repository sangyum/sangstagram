import React from 'react';
import { Avatar } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const AvatarAndUser = ({userAvatar, createdBy}) => {
    return (
        <Box display='flex' flexDirection='row'>
            <Box m={1}>
                <Avatar src={userAvatar} />
            </Box>
            <Box display='flex' alignItems='center'>
                <Button>{createdBy}</Button>
            </Box>
        </Box>
    )
}

export default AvatarAndUser;