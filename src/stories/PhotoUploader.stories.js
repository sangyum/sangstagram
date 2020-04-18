import React from "react";
import { action } from '@storybook/addon-actions';
import faker from 'faker';
import PhotoUploader from "../views/upload/photoUploader";

export default {
    title: 'Photo Uploader',
    component: PhotoUploader
}

const uploadPhoto = action('uploading photo')
const photoUrl = faker.image.abstract();

export const defaultRendering = () => 
    <PhotoUploader 
        uploadPhoto={uploadPhoto} 
        photoUrl={photoUrl} 
    />

export const missingPhotoUrl = () => 
    <PhotoUploader 
        uploadPhoto={uploadPhoto} 
    />

export const isLoading = () => 
<PhotoUploader 
    uploadPhoto={uploadPhoto} 
    photoUrl={photoUrl} 
    isLoading={true}
/>