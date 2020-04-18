import React from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { Link, Switch, Route } from 'react-router-dom'; 
import Following from '../following';
import Followers from '../followers';

const Foo = ({ match }) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="black"
                textColor="primary"
                centered
            >
                <Tab label="Following" component={Link} to={`${match.url}/following`} />
                <Tab label="Followers" component={Link} to={`${match.url}/followers`} />
            </Tabs>
            <Switch>
                <Route path={match.url + '/following'}>
                    <Following />
                </Route>
                <Route path={match.url + '/followers'}>
                    <Followers />
                </Route>
            </Switch>
        </>
    )
}

export default Foo;
