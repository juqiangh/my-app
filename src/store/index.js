/*import { createStore, applyMiddleware, compose   } from 'redux';
/!*import thunk from 'redux-thunk';*!/
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import TodoSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware)
    /!*applyMiddleware(thunk)*!/
);
const store = createStore(reducer, enhancer);
/!*const store = createStore(
    reducer, /!* preloadedState, *!/
    applyMiddleware(thunk)
    /!*window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*!/
);*!/
sagaMiddleware.run(TodoSagas);*/

/*export default store;*/
