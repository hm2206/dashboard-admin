
// Action types
export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";


// Actions creator
export const incrementCounter = () => ({
    type: INCREMENT_COUNTER
})

export const decrementCounter = () => ({
    type: DECREMENT_COUNTER
});


// Estado initial
export const stateInitial = {
    value: 0
}


// reducers
export const counterReducer = (state = stateInitial, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return { ...state, value: state.value + 1 };
        case DECREMENT_COUNTER:
            return { ...state, value: state.value - 1 };
        default:
            return { ...state };
    }
};