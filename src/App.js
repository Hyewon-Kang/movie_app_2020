import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routers/About";
import Home from "./routers/Home";
import Detail from "./routers/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App(){
  return (
  <HashRouter>
    <Navigation /> 
    <Route path="/" exact={true} component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/movie/:id" component={Detail}/>
  </HashRouter>
  );
}

export default App;

/*
Link를 사용하면 Router안에 넣어줘야 함!
Navigation은 props가 없음
*/