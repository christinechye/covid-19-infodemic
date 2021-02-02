// HOW TO SAVE YOUR CHANGES THEN RUN (on master branch):
// $ git add .
// $ git commit -m "update"
// $ git push 
// $ npm run deploy
// wait until "published" displays
// https://christinechye.github.io/covid-19-infodemic/

import React from 'react';
import NavigationBar from './client/components/NavigationBar';
import Home from './client/pages/Home';
import FindState from './client/pages/FindState'; 
import AboutUs from './client/pages/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <React.Fragment>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/findstate" component={FindState} />
          <Route path="/aboutus" component={AboutUs} />
        </Switch>
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
