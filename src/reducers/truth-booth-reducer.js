import { DisplayValue, Phase } from '../constants';
import { Actions } from '../action-creators';

const updatePair = (pairs, index, pair, update) => {
    return [
        ...pairs.slice(0, index),
        Object.assign({}, pair, update),
        ...pairs.slice(index + 1)
    ]
}

const truthBoothReducer = (state, action) => {
    if (!state || !action) {
        return {};
    }

    if (action.type != Actions.ActivateTruthBooth) {
        return state;
    }

    let updatedPairs = [];
    let pairs = state.pairs;
    let selectedCoupleIndex = action.pairId;
    let selectedCouple = pairs[selectedCoupleIndex];

    if (selectedCouple.isMatch) {
        // change state to match and all squares in row and column to not a match

        // temporary dummy action
        updatedPairs = pairs;
    } else {
        updatedPairs = updatePair(pairs, selectedCoupleIndex, selectedCouple, { display: DisplayValue.NotAMatch });
    }

    state = Object.assign(
        {},
        state,
        { 
            phase: Phase.MatchUpCeremony,
            pairs: updatedPairs
        }
    );

    console.log(state);

    return state;
}

export default truthBoothReducer;