import React from 'react';
import './MatchSquare.css'

const MatchSquare = ({ isMatch }) => (
    <div
        className={ "match-table-square " + (isMatch ? "match-table-square-matched" : "") }
        onClick={() => alert("Is a match?: " + isMatch)}>
    </div>
)

export default MatchSquare