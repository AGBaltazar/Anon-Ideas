import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import App from './App';

//Reducers will be the connection between front to back end

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
   <Provider store={store}>
      <App/>
   </Provider>, 
   document.getElementById('root'));
