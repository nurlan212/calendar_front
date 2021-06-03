import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {createBrowserHistory} from 'history';
import createMiddleware from 'redux-saga';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import usersReducer from '../store/reducers/usersReducer';
import calendarsReducer from '../store/reducers/calendarsReducer';
import {rootSaga} from './sagas/index';
import {loadFromLocalStorage, saveToLocalStorage} from './localStorage';

export const history = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  users: usersReducer,
  calendars: calendarsReducer,
  router: connectRouter(history)
});

const sagaMiddleware = createMiddleware();

const middleware = [
  routerMiddleware(history),
  sagaMiddleware
];

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const persistedState = loadFromLocalStorage();

const store = createStore(rootReducer, persistedState, enhancers);

sagaMiddleware.run(rootSaga);

store.subscribe(() => {
  saveToLocalStorage({
    users: {
      user: store.getState().users.user
    }
  })
});

export default store;