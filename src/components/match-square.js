import React from 'react';
import './match-square.css'
import { DisplayValue } from '../constants';

const getClassNameFromDisplayValue = (display) => {
    switch (display)
    {
        case DisplayValue.PossibleMatch:
            return "matchtype-possible-match";
        case DisplayValue.Disabled:
            return "matchtype-disabled";
        case DisplayValue.Matched:
            return "matchtype-matched";
        case DisplayValue.NotAMatch:
            return "matchtype-not-a-match"
        default:
            return "";
    }
}

const MatchSquare = ({
    display,
    onClick
}) => (
    <div
        className={ "match-table-square " + getClassNameFromDisplayValue(display) }
        onClick={ onClick }>
    </div>
)

export default MatchSquare