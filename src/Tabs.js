import React from 'react';
import { Link } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function CenteredTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="black"
            textColor="primary"
            centered
        >
            <Tab label="Posts" component={Link} to="/posts" />
            <Tab label="Follower/Following" component={Link} to="/foo/following" />
            <Tab label="Activity" component={Link} to="/activity" />
            <Tab label="Profile" component={Link} to="/profile" />
            <Tab label="Upload" component={Link} to="/upload" />
        </Tabs>

    );
}
