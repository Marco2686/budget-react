import './App.css'
import React, {useEffect, useState} from "react"
import {Container} from "semantic-ui-react"
import MainHeader from "./components/MainHeader"
import NewEntryForm from "./components/NewEntryForm"
import DisplayBalance from "./components/DisplayBalance"
import DisplayBalances from "./components/DisplayBalances"
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";
import {useSelector} from 'react-redux'
import {
    enable as enableDarkMode,
    disable as disableDarkMode,
} from 'darkreader'

function App() {

    const [totalIncomes, setTotalIncomes] = useState(0)
    const [totalExpenses, setTotalExpenses] = useState(0)
    const [total, setTotal] = useState(0)
    const [entry, setEntry] = useState()
    const entries = useSelector((state) => state.entries)
    const {isOpen, id} = useSelector((state) => state.modals)

    useEffect(() => {
        // Dark mode
        enableDarkMode({
            brightness: 100,
            contrast: 90,
            sepia: 10,
        });

        return () => {
            disableDarkMode();
        };
    }, )

    useEffect(() => {
        const index = entries.findIndex(entry => entry.id === id)
        setEntry(entries[index])
    },[isOpen, id]) // here if I pass a [] it run at startup

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
        ></EntryLines>
        <MainHeader
            title="Add new transaction"
            type="h3"
        />
        <NewEntryForm
        />
        <ModalEdit
            isOpen={isOpen}
            {...entry}
        />
    </Container>
    )
}

export default App