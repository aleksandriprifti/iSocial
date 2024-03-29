import { SyntheticEvent, useState } from 'react'
import { Button, Icon, Item, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import { Link } from 'react-router-dom';
import { useStore } from '../../../app/store/store';
import { format } from 'date-fns';

interface Props {
    activity: Activity;
}

const ActivityListItem = ({ activity }: Props) => {

    const { activityStore } = useStore();
    const { deleteActivity, loading } = activityStore;

    const [target, setTarget] = useState('');

    const handleActivityDelete = (event: SyntheticEvent<HTMLButtonElement>, id: string) => {
        setTarget(event.currentTarget.name);
        deleteActivity(id);
    }

    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src='/assets/user.png' />
                        <Item.Content>
                            <Item.Header as={Link} to={`/activities/${activity.id}`}>
                                {activity.title}
                            </Item.Header>
                            <Item.Description>Hosted By Alex</Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> { format(activity.date!, 'dd MMM yyyy h:mm aa')}
                    <Icon name="marker" /> {activity.venue}
                </span>
            </Segment>
            <Segment secondary>
                Attendees go here...
            </Segment>
            <Segment clearing>
                <span>{activity.description} </span>
            </Segment>
            <Segment clearing color='blue'>
                <Button as={Link} to={`/activities/${activity.id}`} color='teal' floated='right' content='View' />
            </Segment>
        </Segment.Group>
    )
}

export default ActivityListItem