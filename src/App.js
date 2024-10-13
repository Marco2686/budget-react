import './App.css'
import React, {useEffect, useState} from "react"
import {Container} from "semantic-ui-react"
import MainHeader from "./components/MainHeader"
import NewEntryForm from "./components/NewEntryForm"
import DisplayBalance from "./components/DisplayBalance"
import DisplayBalances from "./components/DisplayBalances"
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";


function App() {
    const [entries, setEntries] = useState(initialEntries)
    const [description, setDescription] = useState('')
    const [value, setValue] = useState(0)
    const [isExpense, setIsExpense] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [entryId, setEntryId] = useState(null)
    const [totalIncomes, setTotalIncomes] = useState(0)
    const [totalExpenses, setTotalExpenses] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        if(!isOpen && entryId){
            const index = entries.findIndex(entry => entry.id === entryId)
            const newEntries = [...entries]
            newEntries[index].description = description
            newEntries[index].value = value
            newEntries[index].isExpense = isExpense
            setEntries(newEntries)
            resetEntry()
        }
    },[isOpen]) // here if I pass a [] it run at startup

    useEffect(() => {
        let totalIncomes = 0
        let totalExpenses = 0

        entries.map((entry) => {
            if(entry.isExpense){
                // return totalExpenses += parseFloat(entry.value)
                return totalExpenses += Number(entry.value)
            }
            // return totalIncomes += parseFloat(entry.value)
            return totalIncomes += Number(entry.value)
        })

        setTotalIncomes(totalIncomes)
        setTotalExpenses(totalExpenses)
        setTotal( totalIncomes - totalExpenses)


    }, [entries]) // run everytime entries change

    const deleteEntry = (id) => {
        const result = entries.filter(entry => entry.id !== id)
        setEntries(result)
    }

    const editEntry = (id) => {
        console.log(`Edit entry with id ${id}`)
        if(id){
            const index = entries.findIndex(entry => entry.id === id)
            const entry = entries[index]
            setEntryId(entry.id)
            setDescription(entry.description)
            setValue(entry.value)
            setIsExpense(entry.isExpense)
            setIsOpen(true)
        }
    }

    // We are using the variable from the state
    const addEntry = () => {
        const result = entries.concat({
            id: entries.length+1,
            description,
            value,
            isExpense: isExpense
        })
        console.log('entries', entries)
        console.log('result', result)
        setEntries(result)
        resetEntry()
    }
    const resetEntry = () => {
        setDescription('')
        setValue(0)
        setIsExpense(false)
    }
    return (
    <Container>
        <MainHeader
            title="Budget"
            type="h1"
        />
        <DisplayBalance title='Your Balance' value={total} size='small'/>
        <DisplayBalances
            totalIncomes={totalIncomes}
            totalExpenses={totalExpenses}
        />
        <MainHeader
            title="History"
            type="h3"
        />
        <EntryLines
            entries={entries}
            deleteEntry={deleteEntry}
            editEntry={editEntry}
        ></EntryLines>
        <MainHeader
            title="Add new transaction"
            type="h3"
        />
        <NewEntryForm
            addEntry={addEntry}
            description={description}
            value={value}
            isExpense={isExpense}
            setDescription={setDescription}
            setValue={setValue}
            setIsExpense={setIsExpense}
        />
        <ModalEdit
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            addEntry={addEntry}
            description={description}
            value={value}
            isExpense={isExpense}
            setDescription={setDescription}
            setValue={setValue}
            setIsExpense={setIsExpense}
        />
    </Container>
    )
}

export default App

var initialEntries = [
    {
        id:1,
        description:'Work income',
        value:100,
        isExpense: false,
    },
    {
        id:2,
        description:'Sandwich',
        value:5,
        isExpense: true,
    },
    {
        id:3,
        description:'Rent',
        value:300,
        isExpense: true,
    },
    {
        id:4,
        description:'Work income',
        value:150,
        isExpense: false,
    }
]

