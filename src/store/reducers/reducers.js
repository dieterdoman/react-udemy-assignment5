import * as actionTypes from '../actions';

const initialState = {
    persons: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADDED:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: 'Max',
                age: Math.floor(Math.random() * 40)
            };
            const newPersons = state.persons.concat(newPerson);
            return {
                ...state,
                persons: newPersons
            };
        case actionTypes.DELETED:
            const newDeletePersons = state.persons.filter(person => person.id !== action.id);
            return {
                ...state,
                persons: newDeletePersons
            };
        default:
            return state;
    }
};

export default reducer;
