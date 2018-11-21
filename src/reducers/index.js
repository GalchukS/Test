import {combineReducers} from 'redux';
import input from './inputReducer'
import contacts from './createReducer';
import editField from './editField';

const rootReducer = combineReducers({input,contacts,editField});
export default rootReducer;
