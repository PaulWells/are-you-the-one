import { createStore } from 'redux';
import { initializePairs } from './utilities/match-maker';
import { Phase } from './constants';
import rootReducer from './reducers/root-reducer';

const createInitialStore = () => {
    let initialState = {
        pairs: initializePairs(),
        week: 1,
        phase: Phase.TruthBooth

    }
    return createStore(rootReducer, initialState);
}

export { createInitialStore }