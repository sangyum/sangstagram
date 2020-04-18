import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { ListItemAvatar, Avatar, IconButton } from '@material-ui/core';

const renderActivity = ({ userName, userAvatar, type }) => {
    return (
        <div className="Activity">
            <ListItem>
                <ListItemAvatar>
                    <Avatar alt={userName} src={userAvatar} />
                </ListItemAvatar>
                <ListItemText secondary={`${userName} ${type}`} inset= 'true' />
                <IconButton>
                    { type === 'likes your post' ? <FavoriteIcon /> : <ChatBubbleIcon /> }
                </IconButton>
            </ListItem>
        </div>
    )
}



const Activity = ({ activities = [] }) => {

    return (
        <List>
            {activities.map(activity  => renderActivity(activity))}
        </List>
    )
}

// map is a function that takes arrow function as a parameter; map goes through "activities" and renderActivity for each "activity"

export default Activity;