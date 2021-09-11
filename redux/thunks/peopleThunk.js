import { HYDRATE } from 'next-redux-wrapper'


// Action types
export const SET_PEOPLE = 'SET_PEOPLE'
export const ADD_PEOPLE = 'ADD_PEOPLE'


// Actions creator
export const setPeople = (newPeople = []) => ({
    type: SET_PEOPLE,
    payload: newPeople
})

export const addPeople = (newPeople = []) => ({
    type: ADD_PEOPLE,
    payload: newPeople
})


// Estado initial
export const stateInitial = {
    data: []
}


export const peopleReducer = (state = stateInitial, action = {}) => {
    switch (action.type) {
        case HYDRATE:
            let newState = Object.assign(state, action.payload.people);
            return newState;
        case SET_PEOPLE: 
            state.data = action.payload;
            return state;
        case ADD_PEOPLE:
            state.data = [...state.data, ...action.payload];
            return state;
        default:
            return state;
    }
}