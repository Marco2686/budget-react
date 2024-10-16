import {useEffect, useState} from "react"
import {addEntryRedux, updateEntryRedux} from "../actions/entries.actions"
import {v4 as uuidv4} from "uuid"
import {useDispatch} from "react-redux"
import {closeEditModal} from "../actions/modals.actions";

const useEntryDetails = (desc = '', val = 0, isExp = false) => {
    const [description, setDescription] = useState(desc)
    const [value, setValue] = useState(val)
    const [isExpense, setIsExpense] = useState(isExp)
    const dispatch = useDispatch()

    useEffect(() => {
        setDescription(desc)
        setValue(val)
        setIsExpense(isExp)
    },[desc, val, isExp])

    const addEntry = () => {
        dispatch(addEntryRedux(
            {
                id: uuidv4(),
                description,
                value,
                isExpense
            }
        ))
        resetValues()
    }

    const updateEntry = (id) => {
        dispatch(updateEntryRedux(
            id,
            {
                id,
                description,
                value,
                isExpense
            }
        ))

        dispatch(closeEditModal())
        resetValues()
    }

    const resetValues = () => {
        setDescription('')
        setValue(0)
        setIsExpense(false)
    }

    return {
        description,
        setDescription,
        value,
        setValue,
        isExpense,
        setIsExpense,
        addEntry,
        updateEntry
    }
}

export default useEntryDetails