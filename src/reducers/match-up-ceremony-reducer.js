import State from '../utilities/state';
import { DisplayValue, Phase } from '../constants';
import { Actions } from '../action-creators';
const clonedeep = require('lodash.clonedeep');

const makeMatchUpCeremonySelection = (state, action) => {
    let pairId = action.pairId;
    let pairs = state.pairs;
    let displayValue = pairs[pairId].display;

    if (displayValue !== DisplayValue.PossibleMatch)
    {
        return state;
    }

    let newState = clonedeep(state);
    newState.pairs = State.markCoupleAsSelectedForMatchUpCeremony(pairs, pairId);
    newState.phase = Phase.MatchUpCeremony;

    return newState;
}

const matchUpCeremonyReducer = (state, action) => {
    if (!state || !action) {
        return {};
    }

    if (action.type !== Actions.MatchUpCeremonySelection)
    {
        return state;
    }

    return makeMatchUpCeremonySelection(state, action);
}

export default matchUpCeremonyReducer;