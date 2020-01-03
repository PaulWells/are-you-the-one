import { DisplayValue, Phase } from '../constants';
import { Actions } from '../action-creators';
import State from '../utilities/state';

const truthBoothReducer = (state, action) => {
    if (!state || !action) {
        return {};
    }

    if (action.type !== Actions.ActivateTruthBooth) {
        return state;
    }

    let updatedPairs = [];
    let pairs = state.pairs;
    let selectedCoupleIndex = action.pairId;
    let selectedCouple = pairs[selectedCoupleIndex];

    if (selectedCouple.isMatch) {
        updatedPairs = State.markCoupleAsMatched(pairs, selectedCoupleIndex);
    } else {
        updatedPairs = State.updatePair(pairs, selectedCoupleIndex, { display: DisplayValue.NotAMatch });
    }

    state = Object.assign(
        {},
        state,
        { 
            phase: Phase.MatchUpCeremony,
            pairs: updatedPairs
        }
    );

    return state;
}

export default truthBoothReducer;