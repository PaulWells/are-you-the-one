import State from '../utilities/state';
import { DisplayValue, Phase } from '../constants';
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

    let updatedPairs = State.markCoupleAsSelectedForMatchUpCeremony(pairs, pairId);

    state = Object.assign(
        {},
        state,
        { 
            phase: Phase.MatchUpCeremony,
            pairs: updatedPairs
        }
    );

    return state;

    return State.updateState(state, pairId, { display: newDisplayValue });
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