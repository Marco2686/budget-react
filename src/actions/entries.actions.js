export const addEntryRedux = (payload) => {
    return {
        type: 'ADD_ENTRY',
        payload
    }
}

export const removeEntryRedux = (id) => {
    return {
        type: 'REMOVE_ENTRY',
        payload: {id} // We are passing an object with property id: id
    }
}