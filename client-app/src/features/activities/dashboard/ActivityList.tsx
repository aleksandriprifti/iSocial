import React, { SyntheticEvent, useState } from 'react'
import { Activity } from '../../../app/models/activity'
import { Segment, Item, Button, Label } from 'semantic-ui-react'
import { useStore } from '../../../app/store/store';

interface Props{
    activities: Activity[]
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean
}

const ActivityList = ({activities, selectActivity, deleteActivity, submitting}: Props) => {

      const {activityStore} = useStore();

    const [target, setTarget] = useState('');

    const handleActivityDelete = (event: SyntheticEvent<HTMLButtonElement>, id: string) => {
        setTarget(event.currentTarget.name);
        deleteActivity(id);
    }

  return (
    <Segment>
        <Item.Group divided>
        {activities.map(activity => (
            <Item key={activity.id}>
                <Item.Content>
                    <Item.Header as='a'>{activity.title}</Item.Header>
                    <Item.Meta>{activity.date}</Item.Meta>
                    <Item.Description>
                        <div>{activity.description}</div>
                        <div>{activity.city}, {activity.venue}</div>
                    </Item.Description>
                     <Item.Extra>
                        <Button floated='right' content="View" color='blue' onClick={() => activityStore.selectActivity(activity.id)}/>
                        <Button
                            name={activity.id}
                            loading={submitting && target === activity.id} 
                            floated='right' content="Delete" 
                            color='red' 
                            onClick={(event) => handleActivityDelete(event, activity.id)}/>
                        <Label basic content={activity.category} />
                    </Item.Extra>
                </Item.Content>
            </Item>
        ))
        }
        </Item.Group>
    </Segment>
  )
}

export default ActivityList