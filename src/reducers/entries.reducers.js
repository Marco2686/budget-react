const reducer = (state = initialEntries, action) => {
    let newEntries
    switch(action.type) {
        case 'ADD_ENTRY':
            newEntries = state.concat({...action.payload})
            return newEntries
        case 'REMOVE_ENTRY':
            newEntries = state.filter(entry => entry.id !== action.payload.id)
            return newEntries
        default:
            return state
    }
}

export default reducer

var initialEntries = [
    {
        id:1,
        description:'Work income redux',
        value:100,
        isExpense: false,
    },
    {
        id:2,
        description:'Sandwich redux',
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