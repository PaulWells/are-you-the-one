import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import './index.css';
import MatchTable from './components/MatchTable';

const rootReducer = (state = {}, action) => {
    console.log("reducer:" + state);
    return state;
}

const Root = ({ store }) => (
    <div>
        <h1 className="title">
            Are You The One?
        </h1>
        <MatchTable store={ store } />
    </div>
)

const NumContestantsOfEachGender = 10;

const shuffle = (list) => {
    // For each element in the list, swap it with a random element in the list.
    for (let i = 0; i < list.length; i++) {
        const randomIndex = Math.floor(Math.random() * list.length);
        [list[randomIndex], list[i]] = [list[i], list[randomIndex]];
    }
}

const createMatches = (men, women) => {
    shuffle(men);
    shuffle(women);

    let matches = [];
    for (let i = 0; i < NumContestantsOfEachGender; i++)
    {
        matches.push({ man: men[i], woman: women[i] });
    }

    return matches;
}

Array.from(Array(10).keys());
let men = Array.from(Array(NumContestantsOfEachGender).keys());
let women = Array.from(Array(NumContestantsOfEachGender).keys());
let matches = createMatches(men, women);

let initialState = {
    matches
}

let store = createStore(rootReducer, initialState);

ReactDOM.render(
    <Root store={ store }/>,
    document.getElementById('root')
);
