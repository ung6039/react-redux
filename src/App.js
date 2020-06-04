import React from 'react';
import {Provider} from 'react-redux'
import store from './store/Store'
import FoodNews from "./Component/FoodNews";
import FoodRecipe from './Component/FoodRecipe'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Component/Home";
import CateFoodList from './Component/CateFoodList'
import RecommendFood from "./Component/RecommentFoodhouse";

function App() {
  return (
    <Provider store={store}>
      <Router>
          <Header/>
        <Switch>
          <Route exact path={"/"} component={Home}/>
          <Route path={"/news"} component={FoodNews}/>
          <Route path={"/recipe"} component={FoodRecipe}/>
          <Route path={"recommend"} compoent={RecommendFood}/>
          <Route path={"/cate_food/:cno"} component={CateFoodList}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
