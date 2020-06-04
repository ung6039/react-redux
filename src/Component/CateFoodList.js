import React,{useEffect,useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import axios from 'axios'
import {FETCH_CATE_FOOD} from "../actions/type";

export default function CateFoodList(props) {

    const dispatch = useDispatch()
    useEffect(()=>{
        axios.get('http://localhost:3355/cate_food',{
            params:{
                cno:props.match.params.cno
            }
        }).then((result)=>{
            dispatch({
                type:FETCH_CATE_FOOD,
                payload:result.data
            })
        })
    },[])
    const food_data = useSelector(state=>state.foods.food)

    return(
        <div className={"row"}>

        </div>
    )
}