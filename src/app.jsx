import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import './js/index';

class MyTag extends Component {
    render() {
        return (
            <p>this is react code!</p>
        );
    }
}

ReactDOM.render(
    <MyTag />,
    document.getElementById('container')
);