import React, {useState} from 'react';
import PhotoUploader from './photoUploader';
import { uploadFile } from '../../actions/storage';

const PhotoUploaderContainer = () => {
    const [photoUrl, setPhotoUrl] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    const uploadPhoto = (file) => {
        setIsLoading(true);
        uploadFile(file)
            .then(({ url }) => {
                console.log(url);
                setPhotoUrl(url)
                setIsLoading(false)
            })
    }

    return (
        <PhotoUploader uploadPhoto={uploadPhoto} photoUrl={photoUrl} isLoading={isLoading}/>
    )
}

export default PhotoUploaderContainer;
