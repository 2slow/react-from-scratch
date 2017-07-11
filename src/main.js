'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";

const target = document.getElementById('root');

const node = (
    <App>
        <Navbar/>
        <MainContent/>
    </App>
);

ReactDOM.render(node, target);