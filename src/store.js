import { createStore } from 'redux';
import { initializePairs } from './utilities/match-maker';
import { Phase } from './constants';

const rootReducer = (state = {}, action) => {
    return state;
}

const createInitialStore = () => {
    let initialState = {
        pairs: initializePairs(),
        week: 1,
        phase: Phase.TruthBooth

    }
    return createStore(rootReducer, initialState);
}

export { createInitialStore }