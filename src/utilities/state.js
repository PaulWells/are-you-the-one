import Grid from '../utilities/grid';
import { DisplayValue } from '../constants';

const inSameRowOrColumn = (index1, index2) => {
    return Grid.getRow(index1) === Grid.getRow(index2) || 
    Grid.getColumn(index1) === Grid.getColumn(index2);
}

const markCoupleWithExclusiveDisplayValue = (pairs, selectedCoupleIndex, selectedCoupledDisplayValue, excludedCouplesDisplayValue) => {
    return pairs.map((pair, index) => {
        if (index === selectedCoupleIndex) {
            pair.display = selectedCoupledDisplayValue;
        } else if (inSameRowOrColumn(index, selectedCoupleIndex) && pair.display === DisplayValue.PossibleMatch) {
            pair.display = excludedCouplesDisplayValue;
        } 
        return pair;
    });
}

const State = {
    markCoupleAsMatched: (pairs, selectedCoupleIndex) => {
        return markCoupleWithExclusiveDisplayValue(pairs, selectedCoupleIndex, DisplayValue.Matched, DisplayValue.NotAMatch);
    },

    markCoupleAsSelectedForMatchUpCeremony: (pairs, selectedCoupleIndex, newDisplayValue) => {
        return markCoupleWithExclusiveDisplayValue(pairs, selectedCoupleIndex, DisplayValue.SelectedForMatchUpCeremony, DisplayValue.Disabled);
    },
}

export default State;