import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './cssReset.css';
import styles from './App.module.css';
import HomePage from './Components/HomePage';
import NavBar from './Components/NavBar';
import SettingsPage from './Components/SettingsPage';

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/settings" component={SettingsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
