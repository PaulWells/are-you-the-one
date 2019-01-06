const NumContestantsOfEachGender = 10;

const shuffle = (list) => {
    // For each element in the list, swap it with a random element in the list.
    for (let i = 0; i < list.length; i++) {
        const randomIndex = Math.floor(Math.random() * list.length);
        [list[randomIndex], list[i]] = [list[i], list[randomIndex]];
    }
}

const assignMatches = (pairs) => {

    // Create arrays for men and women containing numbers which represent contestants.
    // A man is matched the woman who's number is in the same index as his number.
    // e.g. 
    // man: [2 3 1]
    // woman: [1 2 3]
    // The matches are [(Man 2, Woman 1), (Man 3, Woman 2), (Man 1, Woman 3)].

    let men = Array.from(Array(NumContestantsOfEachGender).keys());
    let women = Array.from(Array(NumContestantsOfEachGender).keys());
    shuffle(men);
    shuffle(women);

    for (let i = 0; i < NumContestantsOfEachGender; i++)
    {
        pairs[men[i]][women[i]].isMatch = true;
    }

    return pairs;
}

const initializePairs = (men, women) => {

    // Create array of all possible pairings
    let pairs = new Array(NumContestantsOfEachGender);
    for (let i = 0; i < pairs.length; i++) {
        pairs[i] = new Array(NumContestantsOfEachGender);
        for (let j = 0; j < pairs[i].length; j++)
        {
            pairs[i][j] = {
                isMatch: false,
                display: "POSSIBLE_MATCH"
            }
        }
    }

    return assignMatches(pairs);
}

export { initializePairs }