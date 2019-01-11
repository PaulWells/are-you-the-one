import deepFreeze from 'deep-freeze';
import truthBoothReducer from './truth-booth-reducer';
import { ActionCreators } from '../action-creators';
import { Phase, DisplayValue } from '../constants';

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
        phase: Phase.TruthBooth,
        week: 1
    }
}

const createNonTruthBoothAction = () => {
    return {
        type: -1,
        pairId: 0
    }
}

test('Passing no state or action returns empty state', () => {
    let initialState = createMockInitialState();
    let action = ActionCreators.activateTruthBooth(0);

    deepFreeze(action);
    deepFreeze(initialState);

    expect(truthBoothReducer(undefined, undefined)).toEqual({});
    expect(truthBoothReducer(undefined, action)).toEqual({});
    expect(truthBoothReducer(initialState, undefined)).toEqual({});
});

test('Passing wrong action type returns state unchanged', () => {
    let state = createMockInitialState();
    let action = createNonTruthBoothAction();

    deepFreeze(state);
    deepFreeze(action);

    expect(truthBoothReducer(state, action)).toEqual(state);
});

test('Activating Truth Booth on incorrect match marks couple as not a match and changes phase to Match Up Ceremony', () => {
    // TODO: Improve mocking 
    let state = {
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
        phase: Phase.TruthBooth,
        week: 1
    }

    let expectedState =  {
        pairs: [
            {
                isMatch: false,
                display: DisplayValue.NotAMatch
            },
            {
                isMatch: true,
                display: DisplayValue.PossibleMatch
            }
        ],
        phase: Phase.MatchUpCeremony,
        week: 1
    }

    let action = ActionCreators.activateTruthBooth(0);

    deepFreeze(state);
    deepFreeze(action);

    expect(truthBoothReducer(state, action)).toEqual(expectedState);
});