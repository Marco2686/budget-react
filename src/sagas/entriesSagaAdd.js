import axios from 'axios'
import { call, takeLatest , put } from 'redux-saga/effects'
import entriesTypes from '../actions/entries.actions'

export function* addEntrySaga(){
    yield takeLatest(entriesTypes.ADD_ENTRY, addEntryToDb)
}

function* addEntryToDb({payload}){
    console.log(payload)
    yield call (addEntry, payload)
    yield call (addEntryDetails, payload)
    yield put({type: entriesTypes.ADD_ENTRY_RESULT, payload})
}

async function addEntry({id, description}) {
    console.log(`entry`, id, description)
    await axios.post('http://localhost:3002/entries', {
        id, description
    })
}

async function addEntryDetails({id, isExpense, value}) {
    console.log(`details`, id, isExpense, value)
    await axios.post('http://localhost:3002/values', {
        id,
        isExpense,
        value
    })
}