import State from '../utilities/state';
import { DisplayValue } from '../constants';
import { Actions } from '../action-creators';

const toggleMatchUpCeremonySelection = (state, action) => {
    let pairId = action.pairId;
    let pairs = state.pairs;
    let displayValue = pairs[pairId].display;
    let newDisplayValue;

    if (displayValue === DisplayValue.PossibleMatch) {
        newDisplayValue = DisplayValue.SelectedForMatchUpCeremony;
    } else if (displayValue === DisplayValue.SelectedForMatchUpCeremony) {
        newDisplayValue = DisplayValue.PossibleMatch;
    } else {
        throw new Error("Invalid DisplayValue: " + displayValue + " at index: " + pairId);
    }

    let updatedPairs = State.updatePair(pairs, pairId, { display: newDisplayValue });
    return Object.assign(
        {},
        state,
        { 
            pairs: updatedPairs
        }
    );
}

const matchUpCeremonyReducer = (state, action) => {
    if (!state || !action) {
        return {};
    }

    switch (action.type) {
        case Actions.ToggleMatchUpCeremonySelection:
            return toggleMatchUpCeremonySelection(state, action);
        default:
            return state;
    }
}

export default matchUpCeremonyReducer;