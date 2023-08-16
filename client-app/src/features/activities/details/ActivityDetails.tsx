import React from 'react'
import { Card, Image, Icon, Button } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import { useStore } from '../../../app/store/store';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { observer } from 'mobx-react-lite';


const ActivityDetails = () => {

  const {activityStore} = useStore();
  const{selectedActivity: activity, openForm, cancleSelectedActivity } = activityStore;

  if(!activity) return <LoadingComponent />;

  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity.category}.jpg`} alt='logo' />

      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span>{activity.date}</span>
        </Card.Meta>
        <Card.Description>
          {activity.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths='2'>
          <Button basic color='blue' content='Edit' onClick={() => openForm(activity.id)} />
          <Button basic color='grey' content='Cancel' onClick={activityStore.cancleSelectedActivity} />
        </Button.Group>
      </Card.Content>
    </Card>
  )
}

export default observer(ActivityDetails)