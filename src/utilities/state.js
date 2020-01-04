import Grid from '../utilities/grid';
import { DisplayValue, NumContestantsOfEachGender } from '../constants';

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

    isMatchupCeremonyComplete: (state) => {
        return state.pairs.reduce((agg, pair) => {
            return (pair.display === DisplayValue.SelectedForMatchUpCeremony 
                || pair.display === DisplayValue.Matched) ?
                    agg + 1 : agg;
        }, 0) === NumContestantsOfEachGender;
    },

    markAllMatchupCeremonyCouplesAsNotAMatch: (state) => {
        state.pairs = state.pairs.map((pair) => {
            if (pair.display === DisplayValue.SelectedForMatchUpCeremony) {
                pair.display = DisplayValue.NotAMatch;
            }
            return pair;
        });
        return state;
    },

    numberOfCorrectMatchUpCeremonyMatches: (state) => {
        return state.pairs.reduce((agg, pair) => {
            return (pair.display === DisplayValue.SelectedForMatchUpCeremony && pair.isMatch) ? agg + 1 : agg; 
        }, 0);
    },

    resetDisabledPairs: (state) => {
        state.pairs = state.pairs.map((pair) => {
            if (pair.display === DisplayValue.Disabled || pair.display === DisplayValue.SelectedForMatchUpCeremony) {
                pair.display = DisplayValue.PossibleMatch;
            }
            return pair;
        });
        return state;
    }
}

export default State;