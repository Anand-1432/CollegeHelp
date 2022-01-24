import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Home from './Home';
const App =()=>{

  useEffect(()=>{
    document.title = 'Home page';
  })

  return(
    <>
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
    </>
  );
}

export default App;