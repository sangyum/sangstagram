import React from 'react';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { ListItemAvatar, Avatar } from '@material-ui/core';

const renderFollowers = ({ createdBy, userAvatar }) => {
    
  return (
      <ListItem>
        <ListItemAvatar>
            <Avatar alt={createdBy} src={userAvatar}/>
        </ListItemAvatar>
        <ListItemText primary={createdBy} inset= 'true' />
        <Button variant="outlined" color="primary">Remove</Button>
      </ListItem>
  );
}

const Followers = ({ followers = [] }) => {

  return (
    <List>
        {followers.map(follower => renderFollowers(follower))}
    </List>
  )
}

export default Followers;
