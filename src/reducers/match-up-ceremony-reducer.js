import State from '../utilities/state';
import { DisplayValue, Phase } from '../constants';
import { Actions } from '../action-creators';
const clonedeep = require('lodash.clonedeep');

const endMatchupCeremony = (state) => {
    if (State.isMatchupCeremonyComplete(state)) {
        let numCorrectMatches = State.numberOfCorrectMatchUpCeremonyMatches(state);
        if (numCorrectMatches === 0) {
            state = State.markAllMatchupCeremonyCouplesAsNotAMatch(state);
        }

        state = State.resetDisabledPairs(state);
        state.phase = Phase.TruthBooth;
    }
    return state;
}

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

    let newState = clonedeep(state);
    newState = makeMatchUpCeremonySelection(newState, action);
    newState = endMatchupCeremony(newState);
    return newState;
}

export default matchUpCeremonyReducer;