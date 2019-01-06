import { createStore } from 'redux';
import { initializePairs } from './utilities/match-maker';

const rootReducer = (state = {}, action) => {
    return state;
}

const createInitialStore = () => {
    let initialState = {
        pairs: initializePairs(),
        week: 1,
        phase: "Truth Booth"

    }
    return createStore(rootReducer, initialState);
}

export { createInitialStore }