import { DisplayValue, Phase } from '../constants';
import Grid from './grid';

const generateRandomInteger = (n) => {
    return Math.floor(Math.random() * n);
}

const pairsShareARowOrColumn = (index1, index2) => {
    return Grid.getColumn(index1) === Grid.getColumn(index2) ||
    Grid.getRow(index1) === Grid.getRow(index2);
}

const sampleTwoElements = (arr) => {
    let max = arr.length;
    let index1 = arr[generateRandomInteger(max)];
    let index2 = arr[generateRandomInteger(max)];
    while (pairsShareARowOrColumn(index1, index2)) {
        index2 = arr[generateRandomInteger(max)];
    }
    return [index1, index2];
}

const getVisiblePairsForTruthBooth = (pairs) => {
    let visiblePairs = pairs.map((pair) => Object.assign({}, pair));

    // Randomly select two couples to be eligible for the truth booth
    let indexesOfPotentialMatches = visiblePairs.map((pair, index) => { return { pair, index } })
        .filter((pair) => pair.pair.display === DisplayValue.PossibleMatch)
        .map((pair) => pair.index);

    // TODO: detect win condition better
    if (indexesOfPotentialMatches.length < 2)
    {
        console.log("win condition");
        throw "Win!";
    }
    
    let [index1, index2] = sampleTwoElements(indexesOfPotentialMatches);

    // Set all non-matched pairs to be disabled while the user chooses who to put in
    // the truth booth.
    visiblePairs.forEach((pair) => {
        if (pair.display !== DisplayValue.Matched &&
            pair.display !== DisplayValue.NotAMatch) {
            pair.display = DisplayValue.Disabled;
        }
    });

    // Display the truth booth couples
    visiblePairs[index1].display = DisplayValue.PossibleMatch;
    visiblePairs[index2].display = DisplayValue.PossibleMatch;
    return visiblePairs;
}

const getVisiblePairs = (state) => {
    let visiblePairs = state.pairs;
    let phase = state.phase;
    if (phase === Phase.TruthBooth) {
        visiblePairs = getVisiblePairsForTruthBooth(visiblePairs);
    }

    return visiblePairs;
}

export { getVisiblePairs }