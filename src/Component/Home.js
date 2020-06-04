import React,{useEffect,useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {fetchCategory} from '../actions/FoodActions'
import {FETCH_CATEGORY} from "../actions/type";
import axios from 'axios'
import {NavLink} from "react-router-dom";

/*
    useDispatch -> 데이터 요청
    
    // state를 받아옴
    useSelector -> 요청한 데이터 얻기
    
 */
export default function Home(props) {
    const dispatch = useDispatch() // reduce를 연결 => action => { type,data }
    useEffect(()=>{
        axios.get('http://localhost:3355/category')
            .then((result)=>{
                dispatch({
                    type:FETCH_CATEGORY,
                    payload:result.data
                }) // =>action : type을 받음 (type,payload)의 값이 action으로 넘어감
            })
    },[]) // componentWillMount  :: 한번만 읽는지 아닌지?
    /*
            state -> store에 저장된 state
            useSelector(function(state){
               return  tate.foods.category
            });
    <div class="col-md-4">
    <div class="thumbnail">
      <a href="/w3images/lights.jpg">
        <img src="/w3images/lights.jpg" alt="Lights" style="width:100%">
        <div class="caption">
          <p>Lorem ipsum...</p>
        </div>
      </a>
    </div>
     */
    const cate_data = useSelector(state=>state.foods.category)
    const html =cate_data.map((m)=>
        <div className="col-md-3">
            <div className="panel panel-success">

                <div className="panel-heading">{m.title}
                    <br/>
                    <sub>{m.subject}</sub>
                </div>
                <div className="panel-body">
                    <div className="thumbnail">
                        <NavLink to={"/cate_food/"+m.cateno}>
                        <img src={m.poster} alt="Lights" style={{"width":"100%"}}/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
    return (
        <div className={"row"}>
            {html}
        </div>
    )
}