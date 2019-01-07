import React from 'react';
import './root.css';
import MatchTable from './match-table';
import Caption from './caption';

const Root = ({ store }) => (
    <div>
        <h1 className="title">
            Are You The One?
        </h1>
        <MatchTable store={ store } />
        <Caption store={ store }/>
    </div>
)

export default Root;