import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import MatchTable from './components/MatchTable';

const rootReducer = (state = {}, action) => {
    return state;
}

const Root = () => (
    <div>
        <h1 className="title">
            Are You The One?
        </h1>
        <MatchTable />
    </div>
)



ReactDOM.render(
    <Provider store={createStore(rootReducer)}>
        <Root/>
    </Provider>,
    document.getElementById('root')
);
