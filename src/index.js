import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
//import { browserHistory } from 'react-router';
import {WrapperApp} from './App';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

ReactDOM.render(
    <Provider store={store}>
        <WrapperApp />
    </Provider>,
    document.getElementById('root')
);
