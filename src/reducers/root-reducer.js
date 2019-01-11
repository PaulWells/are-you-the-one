import { Actions } from '../action-creators';
import truthBoothReducer from '../reducers/truth-booth-reducer';
import matchupCeremonyReducer from '../reducers/match-up-ceremony-reducer';

const rootReducer = (state = {}, action) => {
    switch (action.type) {
        case Actions.ActivateTruthBooth:
            return truthBoothReducer(state, action);
        case Actions.ToggleMatchUpCeremonySelection:
            return matchUpCeremonyReducer(state, action);
        default:
            return state;
    }
}

export default rootReducer;