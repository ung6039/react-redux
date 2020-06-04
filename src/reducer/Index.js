import {combineReducers} from "redux";
import foodReduce from '../reducer/FoodReduce'

export default combineReducers({
    foods:foodReduce
})