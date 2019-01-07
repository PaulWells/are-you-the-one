const Actions = {
  'ActivateTruthBooth': 0,
}

const ActionCreators = {
    activateTruthBooth: (pairId) => ({
      type: Actions.ActivateTruthBooth,
      pairId
    })
}

export { ActionCreators, Actions }