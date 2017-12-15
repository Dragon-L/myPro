import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import store from './Redux/Store';
import './css/index';
import './js/index';
import MyTag from './Component/Page/MyTag';
import Container from './Component/Common/Container';
import SecondPage from './Component/Page/SecondPage';

store.subscribe(() => {
    console.log('************state has changed*************')
});

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Container}>
                <IndexRoute component={MyTag} />
                <Route path="/index" component={MyTag} />
                <Route path="/secondPage" component={SecondPage} />
            </Route>
        </Router>
    </Provider>,
    document.body.appendChild(document.createElement('div'))
);