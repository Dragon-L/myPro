import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';

import store from './Redux/Store';
import './css/index';
import './js/index';
import MyTag from './Component/MyTag';
import Container from './Component/Container';

store.subscribe(() => {
    console.log('************state has changed*************')
});

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Container} >
                <Route path="/index" component={MyTag} />
            </Route>
        </Router>
    </Provider>,
    document.body.appendChild(document.createElement('div'))
);