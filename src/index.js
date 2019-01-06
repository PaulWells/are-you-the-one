import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/root';
import { createInitialStore } from './store';

let store = createInitialStore();

ReactDOM.render(
    <Root store={ store }/>,
    document.getElementById('root')
);
