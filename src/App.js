import React from "react";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import { animated, useTransition } from "react-spring";
import Simple from "./components/Simple";
import Physics from "./components/Physics";
import List from "./components/List";
import "./styles.css";

export default function App() {
  const location = useLocation();

  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, width: "0%" },
    enter: { opacity: 1, width: "100%" },
    leave: { opacity: 0, width: "0%" }
  });

  return (
    <div className="App__wrapper">
      <nav>
        <ul>
          <li>
            <Link to="/">Physics</Link>
          </li>
          <li>
            <Link to="/simple">Simple</Link>
          </li>
          <li>
            <Link to="/list">List</Link>
          </li>
        </ul>
      </nav>
      <div className="Routes">
        {transitions.map(({ item: location, props, key }) => (
          <animated.div style={props} key={key}>
            <Switch location={location}>
              <Route path="/" exact component={Physics} />
              <Route path="/simple" component={Simple} />
              <Route path="/list" component={List} />
            </Switch>
          </animated.div>
        ))}
      </div>
      {/* <div className="App">a</div> */}
    </div>
  );
}
