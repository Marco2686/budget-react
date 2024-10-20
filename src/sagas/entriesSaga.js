import {take, fork, call, put} from 'redux-saga/effects'
import entriesTypes, {populateEntries, populateEntryDetails} from '../actions/entries.actions'
import axios from 'axios'


export function* getAllEntries() {
    yield take(entriesTypes.GET_ENTRIES)
    console.log('I need to get the entries here and now')
    const {data} = yield call(axios, 'http://localhost:3002/entries')
    yield put(populateEntries(data))
}

export function* getEntryDetails(id){
    const {data} = yield call(axios, `http://localhost:3002/values/${id}`)
    console.log('called for id')
    yield put(populateEntryDetails(id, data))
}
export function* getAllEntriesDetails(){
    const { payload } = yield take(entriesTypes.POPULATE_ENTRIES)

    for (let index = 0; index < payload.length; index++) {
        const entry = payload[index]

        yield fork(getEntryDetails,entry.id)
    }
}