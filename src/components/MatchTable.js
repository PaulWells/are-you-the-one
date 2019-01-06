import React from 'react';
import MatchSquare from './MatchSquare.js'
import './MatchTable.css';

const MaleContestantCount = 10;
const FemaleContestantCount = 10;

const GenerateMatchTableRow = () => {
    let squares = [];
    for (let j = 0; j < MaleContestantCount; j++)
    {
        squares.push(<MatchSquare />)
    }

    return squares;
}

const GenerateMatchTable = () => {
    let rows = [];
    for (let i = 0; i < FemaleContestantCount; i++)
    {
        rows.push(
            <div className="match-table-row">
                { GenerateMatchTableRow() }
            </div>
        );
    }
    return rows;
}

const MatchTable = () => (
    <div className="match-table">
        { GenerateMatchTable() }
    </div>
)

export default MatchTable;

