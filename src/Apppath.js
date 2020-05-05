import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import App from "../Components/App";
import graph1 from "../src/Components/Graphs/graph1";

export default function Apppath() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">App</Link>
          </li>
        
          <li>
            <Link to="/graphs">Graphs</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/">
            <App />
          </Route>
          <Route path="/graphs">
            <graph1 />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}