const Actions = {
  'ActivateTruthBooth': 0,
  'MatchUpCeremonySelection': 1
}

const ActionCreators = {
    activateTruthBooth: (pairId) => ({
      type: Actions.ActivateTruthBooth,
      pairId
    }),
    makeMatchUpCeremonySelection: (pairId) => ({
      type:Actions.MatchUpCeremonySelection,
      pairId
    })
}

export { ActionCreators, Actions }