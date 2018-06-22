import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore } from 'redux'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Main from './Main';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();


// const store = createStore(reducer)
