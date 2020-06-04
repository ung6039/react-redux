import {FETCH_NEWS} from "./type";
import {FETCH_RECIPE,FETCH_CATEGORY} from "./type";
import axios from 'axios'

/*export const fetchNews=(fd)=>dispatch=>{
    axios.get('http://localhost:3355/news',{
        params:{
            fd:fd
        }
    }).then(new1=>dispatch({
        type:FETCH_NEWS,
        payload:new1.data
    }))
}
*/
export function fetchNews(fd){
    return function(dispatch) {
        console.log("액션확인 (news) "+dispatch)
        axios.get('http://localhost:3355/news', {
            params: {
                fd: fd
            }
        }).then(new1 => dispatch({
            type: FETCH_NEWS,
            payload: new1.data
        }))
    }
}
export function fetchRecipe(page){
    return function(dispatch) {
        axios.get('http://localhost:3355/recipe', {
            params: {
                page: page
            }
        }).then(recipe => dispatch({
            type: FETCH_RECIPE,
            payload: recipe.data
        }))
    }
}
export function fetchCategory(){
    return function (dispatch) {
        axios.get('http://localhost:3355/category')
            .then(category=> dispatch({
                type:FETCH_CATEGORY,
                payload:category.data
            }))
    }
}
// REDCUCE--> dispatch({type,payload})--> fucntion(state,action)
// (( action ))에 type,payload 값을 받음

// action 과 reduce를 모아주면 store