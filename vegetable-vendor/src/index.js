import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './store'
import VegEntry from './component/vegetable/VegEntry'
console.log(store)
ReactDOM.render(<Provider store={store}><VegEntry /></Provider>, document.getElementById('root'));
