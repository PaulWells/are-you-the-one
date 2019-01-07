import { DisplayValue, Phase } from '../constants';

const generateRandomInteger = (n) => {
    return Math.floor(Math.random() * n);
}

const generateTwoUniqueRandomIntegers = (max) => {
    let random1 = generateRandomInteger(max);
    let random2 = generateRandomInteger(max);
    while (random2 === random1) {
        random2 = generateRandomInteger(max);
    }
    return [random1, random2];
}

const getVisiblePairsForTruthBooth = (pairs) => {
    let visiblePairs = pairs.map((pair) => Object.assign({}, pair));
    let possibleRemainingPairs = visiblePairs.filter((pair) => pair.display === DisplayValue.PossibleMatch);

    if (possibleRemainingPairs.length < 2)
    {
        // win condition
    }

    // Set all non-matched pairs to be disabled while the user chooses who to put in
    // the truth booth.
    visiblePairs.forEach((pair) => {
        if (pair.display !== DisplayValue.Matched) {
            pair.display = DisplayValue.Disabled;
        }
    });

    // randomly select two couples to be eligible for the truth booth
    let [index1, index2] = generateTwoUniqueRandomIntegers(visiblePairs.length);
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