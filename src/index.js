import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import * as serviceWorker from './serviceWorker';
import Register from './components/jobSeekerRegister'

const Routing = (
  <Router>
    <div>
      <Route path="/jobSeeker/Register" component={Register} />
      <Route path="/" component={App} />
      {/* <Route path="/login" component={Contact} /> */}
    </div>
  </Router>
)

ReactDOM.render(
  Routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
