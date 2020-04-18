import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const CaptionAndDate = ({caption, createdAt}) => {
    return (
        <Box p={3}>
            <Box display='flex' justifyContent='center' className='Date'>
                <Typography>{createdAt.toLocaleDateString()}</Typography>
            </Box>
            <Typography variant='h6' gutterBottom>{caption}</Typography>
        </Box>
    )
}

export default CaptionAndDate;
