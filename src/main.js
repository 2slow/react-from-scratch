'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import Form from "./components/Form";
import Door from "./components/Door";

const target = document.getElementById('root');

const node = (
    <App>
        <Form/>
        <Door/>
    </App>
);

ReactDOM.render(node, target);