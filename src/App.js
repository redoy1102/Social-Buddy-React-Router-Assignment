import React from 'react';
import './App.css';
import Home from './Component/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from './Component/NoMatch/NoMatch';
import PostDetail from './Component/PostDetail/PostDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/post/:id">
          <PostDetail></PostDetail>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*" >
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
