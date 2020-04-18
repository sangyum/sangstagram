import React from 'react';
import Activity from './activity';
import faker from 'faker';
import { range } from 'lodash';

const activityTypes = ['likes your post', 'commented on your post']

const generateActivities = (numberOfActivities) => {
    return range(numberOfActivities).map(() => {
        return {
            userAvatar: faker.image.avatar(),
            userName: faker.internet.userName(),
            type: activityTypes[faker.random.number({min: 0, max: 1})]
        }
    })
}
const ActivityContainer = () => {
    const activities = generateActivities(15)

    const foo = {
        abc: 'xyz'
    }
    
    return (
        <Activity activities={activities} foo={foo} brandon='rules' justin='abc' scooter=''/>
    )
}

/*

const props = {
    activities: [],
    brandon: 'rules',
    justin: 'abc',
    scooter: '',
    foo: {
        abc: 'xyz'
    }
}

Activity(props)

const foo = 'abc';

*/

export default ActivityContainer;
