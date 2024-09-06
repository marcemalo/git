import { createStore, combineReducers } from 'redux';
import userReducer from '../reducer/useReducer';

const rootReducer = combineReducers({
  user: userReducer
});

const store = createStore(rootReducer);

export { store }; // Bu yerda store eksport qilinadi
