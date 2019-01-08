import { DisplayValue, Phase } from '../constants';
import Grid from './grid';

const generateRandomInteger = (n) => {
    return Math.floor(Math.random() * n);
}

const pairsShareARowOrColumn = (index1, index2) => {
    return Grid.getColumn(index1) === Grid.getColumn(index2) ||
    Grid.getRow(index1) === Grid.getRow(index2);
}

const selectTwoRandomPairs = (max) => {
    let index1 = generateRandomInteger(max);
    let index2 = generateRandomInteger(max);
    while (pairsShareARowOrColumn(index1, index2)) {
        index2 = generateRandomInteger(max);
    }
    return [index1, index2];
}

const getVisiblePairsForTruthBooth = (pairs) => {
    let visiblePairs = pairs.map((pair) => Object.assign({}, pair));
    let possibleRemainingPairs = visiblePairs.filter((pair) => pair.display === DisplayValue.PossibleMatch);

    // If there are two pairs that are still possible matches then there are two valid pairs to choose for the
    // truth booth. e.g. There cannot be only two matches left which share the same man or woman.
    if (possibleRemainingPairs.length < 2)
    {
        // win condition
    }

    // Set all non-matched pairs to be disabled while the user chooses who to put in
    // the truth booth.
    visiblePairs.forEach((pair) => {
        if (pair.display !== DisplayValue.Matched &&
            pair.display !== DisplayValue.NotAMatch) {
            pair.display = DisplayValue.Disabled;
        }
    });

    // randomly select two couples to be eligible for the truth booth

    // BUG: The same person cannot be in both couples eligible for the truth booth.
    let [index1, index2] = selectTwoRandomPairs(visiblePairs.length);
    visiblePairs[index1].display = DisplayValue.PossibleMatch;
    visiblePairs[index2].display = DisplayValue.PossibleMatch;
    return visiblePairs;
}

const getVisiblePairs = (store) => {
    let visiblePairs = store.getState().pairs;
    let phase = store.getState().phase;
    if (phase === Phase.TruthBooth) {
        visiblePairs = getVisiblePairsForTruthBooth(visiblePairs);
    }

    return visiblePairs;
}

export { getVisiblePairs }