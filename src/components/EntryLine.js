import React from 'react'
import {Grid, Icon, Segment} from "semantic-ui-react"

function EntryLine(  {id, description, value, isExpense = false, deleteEntry, editEntry}) {
    return (
        <>
            <Segment color={isExpense ? 'red' : 'green'}>
                <Grid columns={3} textAlign="right">
                    <Grid.Row>
                        <Grid.Column width={8} textAlign="left">
                            {description}
                        </Grid.Column>
                        <Grid.Column width={3}>
                            {value}
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Icon name="edit" bordered onClick={() => editEntry(id)}></Icon>
                            <Icon name="trash" bordered onClick={() => deleteEntry(id)}></Icon>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </>
    )
}

export default EntryLine