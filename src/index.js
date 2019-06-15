import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import userReducer from './reducers/userReducer';
import productReducer from './reducers/productReducer';

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
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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

ReactDOM.render(<Provider store={store}><App count={4} /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
