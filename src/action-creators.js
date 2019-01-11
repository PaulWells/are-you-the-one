const Actions = {
  'ActivateTruthBooth': 0,
  'ToggleMatchUpCeremonySelection': 1
}

const ActionCreators = {
    activateTruthBooth: (pairId) => ({
      type: Actions.ActivateTruthBooth,
      pairId
    }),
    toggleMatchUpCeremonySelection: (pairId) => ({
      type:Actions.ToggleMatchUpCeremonySelection,
      pairId
    })
}

export { ActionCreators, Actions }