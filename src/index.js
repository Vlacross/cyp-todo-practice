import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer)

render(

<Provider store={store}>
  <App />
</Provider>

, document.getElementById('root'));


serviceWorker.unregister();
