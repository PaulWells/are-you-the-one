import React from 'react';
import { Phase } from '../constants';

const getPrintPhaseFromStatePhase = (phase) => {
    switch (phase) {
        case Phase.TruthBooth:
            return "Truth Booth";
        case Phase.MatchUpCeremony:
            return "Match Up Ceremony";
        default:
            return "";
    }
}

const getCaptionFromState = (state) => {
    return "Week " + state.week + " " + getPrintPhaseFromStatePhase(state.phase);
}

const Caption = ({store}) => (
    <h3 className="caption">
        { getCaptionFromState(store.getState()) }
    </h3>
)

export default Caption;
