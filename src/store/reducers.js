import { combineReducers } from 'redux';

import accountReducer from '../core/accounts/reducers';
import globalReducer from '../core/global/reducers';


export default combineReducers({
    globalReducer,
    accountReducer,
});
