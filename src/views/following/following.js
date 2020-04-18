import React from 'react';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { ListItemAvatar, Avatar } from '@material-ui/core';

const renderFollowing = ({ createdBy, userAvatar }) => {
    
  return (
      <ListItem>
        <ListItemAvatar>
            <Avatar alt={createdBy} src={userAvatar}/>
        </ListItemAvatar>
        <ListItemText primary={createdBy} inset= 'true' />
        <Button variant="outlined" color="primary">Following</Button>
      </ListItem>
  );
}

const Following = ({ following = [] }) => {

  return (
    <List>
        {following.map(follower => renderFollowing(follower))}
    </List>
  )
}

export default Following;
