import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MyTag from './component/MyTag.jsx';
import './css/index.css';
import './js/index.js';

ReactDOM.render(
    <MyTag name='Guolong'/>,
    document.getElementById('container')
);