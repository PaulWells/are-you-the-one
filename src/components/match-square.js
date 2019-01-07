import React from 'react';
import './match-square.css'

const getClassNameFromDisplayValue = (display) => {

    if (display === "POSSIBLE_MATCH") {
        return "matchtype-possible-match";
    } else if (display === "DISABLED") {
        return "matchtype-disabled";
    } else if (display === "MATCHED") {
        return "matchtype-matched";
    }

    return "";
}

const MatchSquare = ({ display }) => (
    <div
        className={ "match-table-square " + getClassNameFromDisplayValue(display) }
        onClick={() => alert("className: " + getClassNameFromDisplayValue(display))}>
    </div>
)

export default MatchSquare