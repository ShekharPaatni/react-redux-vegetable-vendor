import {createStore} from 'redux'
import {vendor} from './reducer/vegetable'

const store = createStore(vendor, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store
