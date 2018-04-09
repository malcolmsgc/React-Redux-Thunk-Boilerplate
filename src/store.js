import { createStore, applyMiddleware/*, compose*/ } from 'redux';
import { /*syncHistoryWithStore,*/ routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension' //replaces 'compose' from redux package
// import the root reducer
import rootReducer from './reducers/rootReducer';

export const history = createHistory();

//create default data
const startState = {
    appMeta: {
        appIsInteractive: false
    }
};
// const enhancers = [];
const middleware = [
    thunk,
    routerMiddleware(history)
];

const composedEnhancers = composeWithDevTools(
    applyMiddleware(...middleware)
);

const store = createStore( rootReducer, startState, composedEnhancers );

// if (module.hot) {
//     module.hot.accept('./src/reducers/', () => {
//         const nextRootReducer = require('./reducers/main.js').default;
//         store.replaceReducer(nextRootReducer);
//     })
// }

export default store;