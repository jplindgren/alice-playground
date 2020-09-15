import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LettersPlayground from './Components/Fun/LettersPlayground'
import TextEditor from './Components/TextEditor/TextEditor'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/text" component={TextEditor} />
          <Route path={"/"} component={LettersPlayground} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
