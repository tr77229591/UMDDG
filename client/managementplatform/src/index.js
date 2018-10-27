import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {APIURL} from './constants'

import rootReducer from './reducer'
import route from './route'
import './index.css'
// import App from './App'
import * as serviceWorker from './serviceWorker'
import axios from 'axios'
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))


// 比赛设置访问地址
axios.defaults.baseURL=`${APIURL}`
// axios.defaults.baseURL='http://localhost:8080'



ReactDOM.render(
  <Provider store={store}>
    <div>
      {route}
    </div>
    </Provider>
  , document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
