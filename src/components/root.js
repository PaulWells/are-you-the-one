import React from 'react';
import './root.css';
import MatchTable from './match-table';

const Root = ({ store }) => (
    <div>
        <h1 className="title">
            Are You The One?
        </h1>
        <MatchTable store={ store } />
        <h3 className="caption">
            Week { store.getState().week } { store.getState().phase }
        </h3>
    </div>
)

export default Root;