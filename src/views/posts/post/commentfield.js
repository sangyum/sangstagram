import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const CommentField = ({ saveComment }) => {
    const [fieldState, setFieldState] = useState('')

    const handleOnChange = (event) => {
        setFieldState(event.target.value)
    }

    const handleOnClick = () => {
        saveComment({
            text: fieldState,            
        });
        setFieldState('')
    }

    return (
        <>
            <Box className='TextField' display='flex' flex-direction='row'>
                <Box>
                    <TextField 
                        value={fieldState}
                        className='TextField'
                        onChange={handleOnChange} 
                        multiline={true} 
                        id="outlined-basic" 
                        label="Type your comment..." 
                        variant="outlined" />
                </Box>
                <Box m={1}>
                    <Button 
                        variant="contained" 
                        disabled={fieldState.length === 0}
                        onClick={handleOnClick}
                    >
                        Submit
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default CommentField;
