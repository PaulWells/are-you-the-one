const Phase = {
    "TruthBooth": 0,
    "MatchUpCeremony": 1
}

// TODO: logically seperate DisplayValue from MatchState
const DisplayValue = {
    "PossibleMatch": 0,
    "Matched": 1,
    "Disabled": 2,
    "NotAMatch": 3,
    "SelectedForMatchUpCeremony": 4
}

const NumContestantsOfEachGender = 4;

export { DisplayValue, NumContestantsOfEachGender, Phase }