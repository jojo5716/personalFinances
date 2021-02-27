import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers';

const initialState = {};
const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
    trace: true,
});
export default () => {
    const sagaMiddleware = createSagaMiddleware({});
    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(sagaMiddleware, createLogger()),
        ),
        // applyMiddleware(sagaMiddleware),
    );

    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);

    return store;
};
