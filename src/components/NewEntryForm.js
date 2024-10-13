import React, {useState} from 'react'
import {Form} from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";
import {useDispatch} from "react-redux";
import {addEntryRedux} from "../actions/entries.actions";
import {v4 as uuidv4} from "uuid"

function NewEntryForm() {
    const [description, setDescription] = useState('')
    const [value, setValue] = useState(0)
    const [isExpense, setIsExpense] = useState(false)
    const dispatch = useDispatch()

    const addEntry = () => {
        dispatch(addEntryRedux(
            {
                id: uuidv4(),
                description,
                value,
                isExpense
            }
        ))
        setDescription('')
        setValue(0)
        setIsExpense(false)
    }
    return (
        <Form unstackable>
            <EntryForm
                description={description}
                value={value}
                isExpense={isExpense}
                setDescription={setDescription}
                setValue={setValue}
                setIsExpense={setIsExpense}
            />
            <ButtonSaveOrCancel
                addEntry={addEntry}
            />
        </Form>
    )
}

export default NewEntryForm