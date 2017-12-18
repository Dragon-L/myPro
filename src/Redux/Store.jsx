import {createStore} from 'redux';

var reducer = (state, action) => {
    return state;
};

var store = createStore(reducer, {tittle : '销售录入'});

export default store;