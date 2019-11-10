import {combineReducers} from 'redux';
import {fetchToDos, fetchCategories} from './TodoReducers.js';

export default combineReducers({
    fetchToDos,
    fetchCategories
});