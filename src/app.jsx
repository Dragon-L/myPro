import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute} from 'react-router';
import createHistory from 'history/createBrowserHistory';

import store from './Redux/Store';
import './Style/index';
import './js/index';
import MyTag from './Component/Page/MyTag';
import SecondPage from './Component/Page/SecondPage';

const history = createHistory();

store.subscribe(() => {
    console.log('************state has changed*************')
});

render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route exact path="/" component={MyTag} />
                <Route path="/index" component={MyTag} />
                <Route path="/secondPage" component={SecondPage} />
            </div>
        </Router>
    </Provider>,
    document.body.appendChild(document.createElement('div'))
);