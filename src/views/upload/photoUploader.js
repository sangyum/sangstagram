import React, {useState} from 'react';
import {DropzoneArea} from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';
import LoadingOverlay from 'react-loading-overlay';
import Box from '@material-ui/core/Box';

const PhotoUploader = ({ uploadPhoto, photoUrl, isLoading }) => {
    const [filesState, setFilesState] = useState([])
    
    const handleOnChange = (files) => {
        setFilesState(files)
    }

    const handleOnClick = () => {
        uploadPhoto(filesState[0])
    }

    return (
         <>
            <LoadingOverlay
                active={isLoading}
                spinner
                text='Shut up and wait...'
            >
                <DropzoneArea
                    onChange={handleOnChange}
                />
                <Box display="flex" justifyContent="center" m={5} p={5}>
                    <Button 
                        onClick={handleOnClick} 
                        variant="contained" 
                        color="primary"
                        disabled={filesState.length === 0}
                    >
                        Upload
                    </Button>
                </Box>
                <div className="UploadPic">
                    {
                        photoUrl &&  <img alt="Foo" src={photoUrl} />
                    }
                </div>
            </LoadingOverlay>
            </>
        )
}

export default PhotoUploader;
