import Grid from '../utilities/grid';
import { DisplayValue } from '../constants';

const getUpdatedPair = (pair, update) => {
    return Object.assign({}, pair, update);
}

const inSameRowOrColumn = (index1, index2) => {
    return Grid.getRow(index1) === Grid.getRow(index2) || 
    Grid.getColumn(index1) === Grid.getColumn(index2);
}

const markCoupleWithExclusiveDisplayValue = (pairs, selectedCoupleIndex, selectedCoupledDisplayValue, excludedCouplesDisplayValue) => {
    return pairs.map((pair, index) => {
        if (index === selectedCoupleIndex) {
            return getUpdatedPair(pair, { display: selectedCoupledDisplayValue });
        } else if (inSameRowOrColumn(index, selectedCoupleIndex) && pair.display === DisplayValue.PossibleMatch) {
            return getUpdatedPair(pair, { display: excludedCouplesDisplayValue });
        } else {
            return pair;
        }
    });
}

const State = {
    markCoupleAsMatched: (pairs, selectedCoupleIndex) => {
        return markCoupleWithExclusiveDisplayValue(pairs, selectedCoupleIndex, DisplayValue.Matched, DisplayValue.NotAMatch);
    },

    markCoupleAsSelectedForMatchUpCeremony: (pairs, selectedCoupleIndex) => {
        return markCoupleWithExclusiveDisplayValue(pairs, selectedCoupleIndex, DisplayValue.SelectedForMatchUpCeremony, DisplayValue.Disabled);
    },

    updatePair: (pairs, index, update) => {
        return [
            ...pairs.slice(0, index),
            getUpdatedPair(pairs[index], update),
            ...pairs.slice(index + 1)
        ]
    },

    updateState: (state, index, update) => {
        let updatedPairs = State.updatePair(state.pairs, index, update);
        return Object.assign(
            {},
            state,
            { 
                pairs: updatedPairs
            }
        );
    }
}

export default State;