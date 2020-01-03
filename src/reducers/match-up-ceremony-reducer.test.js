import deepFreeze from 'deep-freeze';
import matchUpCeremonyReducer from './match-up-ceremony-reducer';
import { Actions, ActionCreators } from '../action-creators';
import { Phase, DisplayValue } from '../constants';
const clonedeep = require('lodash.clonedeep');

const createMockInitialState = () => {
    return {
        pairs: [
            {
                isMatch: false,
                display: DisplayValue.PossibleMatch
            },
            {
                isMatch: true,
                display: DisplayValue.PossibleMatch
            }
        ],
        phase: Phase.MatchUpCeremony,
        week: 1
    }
}

const createNonMatchUpCeremonyAction = () => {
    return {
        type: Actions.TruthBooth,
        pairId: 0
    }
}

test('Passing no state or action returns empty state', () => {
    let initialState = createMockInitialState();
    let action = ActionCreators.toggleMatchUpCeremonySelection(0);

    deepFreeze(action);
    deepFreeze(initialState);

    expect(matchUpCeremonyReducer(undefined, undefined)).toEqual({});
    expect(matchUpCeremonyReducer(undefined, action)).toEqual({});
    expect(matchUpCeremonyReducer(initialState, undefined)).toEqual({});
});

test('Passing wrong action type returns state unchanged', () => {
    let state = createMockInitialState();
    let action = createNonMatchUpCeremonyAction();

    deepFreeze(state);
    deepFreeze(action);

    expect(matchUpCeremonyReducer(state, action)).toEqual(state);
});

test('Toggling Match Up Ceremony selection changes display from PossibleMatch to SelectedForMatchupCeremony', () => {

    let state = createMockInitialState();
    let expectedState = clonedeep(state);

    let selectedPairId = 0;
    expectedState.pairs[selectedPairId].display = DisplayValue.SelectedForMatchUpCeremony;

    let action = ActionCreators.toggleMatchUpCeremonySelection(selectedPairId);

    deepFreeze(state);
    deepFreeze(action);

    expect(matchUpCeremonyReducer(state, action)).toEqual(expectedState);
});