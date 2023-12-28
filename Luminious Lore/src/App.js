import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
// Import other components...

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          {/* Add other routes */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

