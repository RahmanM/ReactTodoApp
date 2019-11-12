import {combineReducers} from 'redux';
import {fetchToDos, fetchCategories, fetchAllToDos} from './TodoReducers.js';

export default combineReducers({
    fetchToDos,
    fetchCategories,
    fetchAllToDos
});