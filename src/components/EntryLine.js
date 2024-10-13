import React from 'react'
import {Grid, Icon, Segment} from "semantic-ui-react"
import {useDispatch} from "react-redux"
import {removeEntryRedux} from "../actions/entries.actions";

function EntryLine(  {id, description, value, isExpense = false, editEntry}) {
    const dispatch = useDispatch()
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
                            <Icon name="trash" bordered onClick={() => dispatch(removeEntryRedux(id))}></Icon>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </>
    )
}

export default EntryLine