import React, {useState, ChangeEvent} from 'react'
import { Segment, Form, Button, Input, TextArea } from 'semantic-ui-react'
import { Activity } from '../../../app/models/activity'

interface Props {
    activity: Activity | undefined;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void
    submitting: boolean
}

const ActivityForm = ({ activity: selectedActivity, closeForm, createOrEdit, submitting }: Props) => {

    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    }

    const [activity, setActivity] = useState(initialState);

    const handleSubmit = () =>{
        createOrEdit(activity)
        console.log(activity);
    }

    const handleInpoutChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        setActivity({...activity, [name]: value});
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Field>
                    <Input placeholder='Title' value={activity.title} name='title' onChange={handleInpoutChange}/>
                </Form.Field>
                <Form.Field>
                    <TextArea placeholder='Description' value={activity.description} name='description' onChange={handleInpoutChange}/>
                </Form.Field>
                <Form.Field>
                    <Input placeholder='Category' value={activity.category} name='category' onChange={handleInpoutChange} />
                </Form.Field>
                <Form.Field>
                    <Input type='date' placeholder='Date' value={activity.date} name='date' onChange={handleInpoutChange}/>
                </Form.Field>
                <Form.Field>
                    <Input placeholder='City' value={activity.city} name='city' onChange={handleInpoutChange} />
                </Form.Field>
                <Form.Field>
                    <Input placeholder='Venue' value={activity.venue} name='venue' onChange={handleInpoutChange}/>
                </Form.Field>

                <Button loading={submitting} floated='right' positive type='submit' content="Submit"  />
                <Button floated='right' type='button' content="Cancel" onClick={closeForm} />
            </Form>
        </Segment>
    )
}

export default ActivityForm