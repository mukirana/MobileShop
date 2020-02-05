import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Details from './Components/Details'
import * as serviceWorker from './serviceWorker';
import { Switch, Route, BrowserRouter } from "react-router-dom";

ReactDOM.render(<BrowserRouter>
                  <Switch>
                      <Route path="/" exact component={App}/>
                      <Route path="/details/:id" exact component={Details}/>
                  </Switch>
               </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
