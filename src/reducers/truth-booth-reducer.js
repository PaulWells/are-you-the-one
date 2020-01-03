import { DisplayValue, Phase } from '../constants';
import { Actions } from '../action-creators';
import State from '../utilities/state';
const clonedeep = require('lodash.clonedeep');

const truthBoothReducer = (state, action) => {
    if (!state || !action) {
        return {};
    }

    if (action.type !== Actions.ActivateTruthBooth) {
        return state;
    }

    let newState = clonedeep(state);
    let selectedCoupleIndex = action.pairId;
    let selectedCouple = state.pairs[selectedCoupleIndex];

    if (selectedCouple.isMatch) {
        newState.pairs = State.markCoupleAsMatched(state.pairs, selectedCoupleIndex);
    } else {
        newState.pairs[selectedCoupleIndex].display = DisplayValue.NotAMatch;
    }

    newState.phase = Phase.MatchUpCeremony;
    return newState;
}

export default truthBoothReducer;