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
    expect(truthBoothReducer(undefined, undefined)).toEqual({});
    expect(truthBoothReducer(undefined, ActionCreators.activateTruthBooth(0))).toEqual({});
    expect(truthBoothReducer(createMockInitialState(), undefined)).toEqual({});
});

test('Passing wrong action type returns state unchanged', () => {
    let state = createMockInitialState();
    expect(truthBoothReducer(state, createNonTruthBoothAction)).toEqual(state);
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

    expect(truthBoothReducer(state, ActionCreators.activateTruthBooth(0))).toEqual(expectedState);
});