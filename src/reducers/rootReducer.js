import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// import reducers
import appMeta from './appMeta.js'
// import data2 from './data2'

const rootReducer = combineReducers(
    {
        appMeta,
        // data2,
        routing: routerReducer
    }
);

export default rootReducer;