import React, {Fragment} from "react"
import {Checkbox, Form, Segment} from "semantic-ui-react";

function EntryForm({description, value, isExpense, setDescription, setValue, setIsExpense}) {
    return (
        <Fragment>
            <Form.Group>
                <Form.Input
                    icon="tags"
                    width={12}
                    label="Description"
                    placeholder="New shinny thing"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                >
                </Form.Input>
                <Form.Input
                    icon="eur"
                    iconPosition="left"
                    width={4}
                    label="Value"
                    placeholder="100.00"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                >
                </Form.Input>
            </Form.Group>
            <Segment compact>
                <Checkbox
                    toggle
                    label='is Expense'
                    checked={isExpense}
                    onChange={() => setIsExpense((oldState) => !oldState)}
                />
            </Segment>
        </Fragment>
    )
}
export default EntryForm