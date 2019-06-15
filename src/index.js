import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import thunk from 'redux-thunk';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import userReducer from './reducers/userReducer';
import productReducer from './reducers/productReducer';

const allEnhancers = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootReducer = combineReducers({
    products: productReducer,
    user: userReducer
});

const store = createStore(
    rootReducer,
    {
        products:[{
            name: 'Samsung',
            type: 'Phone'
        }],
        user: 'Omer'
    },
    allEnhancers
);

store.subscribe(() => {
    console.log('Store updated')
    //console.log(store.getState());
});

/* const action = {
    type: 'changeTheState',
    payload: {
        newState: 'my new state'
    }
};

store.dispatch(action); */

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
