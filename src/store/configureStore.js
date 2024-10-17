import {combineReducers, legacy_createStore as createStore} from "redux"
import { composeWithDevTools } from '@redux-devtools/extension'
import entriesReducers from "../reducers/entries.reducers"
import modalsReducers from "../reducers/modals.reducers"

const configureStore = () => {
    return createStore(
        combineReducers({
            entries: entriesReducers,
            modals: modalsReducers
        }), composeWithDevTools()
    )
}

export default configureStore