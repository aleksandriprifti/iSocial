import React from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'

const ActivityForm = () => {
  return (
    <Segment clearing>
        <Form>
            <Form.Field>
                <input placeholder='First Name' />
            </Form.Field>
            <Form.Field>
                <textarea placeholder='Description' />
            </Form.Field>
            <Form.Field>
                <input placeholder='Category' />
            </Form.Field>
            <Form.Field>
                <input placeholder='Date' />
            </Form.Field>
            <Form.Field>
                <input placeholder='City' />
            </Form.Field>
            <Form.Field>
                <input placeholder='Venue' />
            </Form.Field>

            <Button floated='right' positive type='submit' content="Submit"/>
            <Button floated='right'  type='button' content="Cancel"/>
        </Form>
    </Segment>
  )
}

export default ActivityForm