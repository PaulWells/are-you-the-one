import { Actions } from '../action-creators';
import truthBoothReducer from './truth-booth-reducer';
import matchUpCeremonyReducer from './match-up-ceremony-reducer';

const rootReducer = (state = {}, action) => {
    switch (action.type) {
        case Actions.ActivateTruthBooth:
            return truthBoothReducer(state, action);
        case Actions.MatchUpCeremonySelection:
            return matchUpCeremonyReducer(state, action);
        default:
            return state;
    }
}

export default rootReducer;