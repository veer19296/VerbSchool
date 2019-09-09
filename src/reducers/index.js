import {combineReducers} from 'redux';
import common from '../reducers/commonReducer';
import verb from '../reducers/verbReducer';

export default combineReducers({
    common,
    verb
})