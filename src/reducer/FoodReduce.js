import {FETCH_NEWS, FETCH_RECIPE,FETCH_CATEGORY,FETCH_CATE_FOOD} from "../actions/type";

const initialState={

    news:[],
    recipe:[],
    category:[],
    food:[],
    food_detail:{},
    recipe_detail:{},
    pop_food:[],
    recommend_food:[]
}

export default function (state=initialState,action) {
    switch (action.type) {
        case FETCH_NEWS:
            return {
                ...state,
                news: action.payload
            }
        case FETCH_RECIPE:
            return{
                ...state,
                recipe: action.payload
            }
        case FETCH_CATEGORY:
            return{
                ...state,
                category:action.payload
            }
        case FETCH_CATE_FOOD:
            return {
                ...state,
                food: action.payload
            }
        default:
            return state
    }
}