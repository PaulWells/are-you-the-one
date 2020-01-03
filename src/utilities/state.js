import Grid from '../utilities/grid';
import { DisplayValue } from '../constants';

const getUpdatedPair = (pair, update) => {
    return Object.assign({}, pair, update);
}

const inSameRowOrColumn = (index1, index2) => {
    return Grid.getRow(index1) === Grid.getRow(index2) || 
    Grid.getColumn(index1) === Grid.getColumn(index2);
}

const State = {
    markCoupleAsMatched: (pairs, selectedCoupleIndex) => {
        let updatedPairs = pairs.map((pair, index) => {
            if (index === selectedCoupleIndex) {
                return getUpdatedPair(pair, { display: DisplayValue.Matched });
            } else if (inSameRowOrColumn(index, selectedCoupleIndex)) {
                return getUpdatedPair(pair, { display: DisplayValue.NotAMatch });
            } else {
                return pair;
            }
        });
        return updatedPairs;
    },

    updatePair: (pairs, index, update) => {
        return [
            ...pairs.slice(0, index),
            getUpdatedPair(pairs[index], update),
            ...pairs.slice(index + 1)
        ]
    }
}

export default State;