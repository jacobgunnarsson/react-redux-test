'use strict';

import 'styles/main.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'

import { fetchCategoryThreads, fetchCurrentThreads } from './actions'
import RootReducer from './reducers'

import App from './components/App'

const loggerMiddleware = createLogger()

const store = createStore(
  RootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
  ),
)

const state = store.getState()

store.dispatch(fetchCategoryThreads(state.threadList.activeCategory))
  .then(() => store.dispatch(fetchCurrentThreads()))

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/(:category)' component={App} />
    </Router>
  </Provider>,
  document.getElementById('thread-list'),
)
