import { Actions } from '../action-creators';
import truthBoothReducer from '../reducers/truth-booth-reducer';

const rootReducer = (state = {}, action) => {
    switch (action.type) {
        case Actions.ActivateTruthBooth:
            return truthBoothReducer(state, action);
        default:
            return state;
    }
}

export default rootReducer;