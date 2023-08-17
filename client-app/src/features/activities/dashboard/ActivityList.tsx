import { Segment, Item } from 'semantic-ui-react'
import { useStore } from '../../../app/store/store';
import { observer } from 'mobx-react-lite';
import ActivityListItem from './ActivityListItem';


const ActivityList = () => {
    const {activityStore} = useStore();
    const {activitiesByDate}= activityStore;

  return (
    <Segment>
        <Item.Group divided>
        {activitiesByDate.map(activity => (
            <ActivityListItem key={activity.id} activity={activity} />
        ))
        }
        </Item.Group>
    </Segment>
  )
}

export default observer(ActivityList)