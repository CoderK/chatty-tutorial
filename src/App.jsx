import React, { useState, useEffect } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Home from './pages/Home';
import Chat from './pages/Chat';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { auth } from './services/firebase';
import { PrivateRoute } from './routes/PrivateRoute';
import { PublicRoute } from './routes/PublicRoute';

const App = () => {
  const [ state, setState ] = useState({ authenticated: false, loading: true });

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        setState({ authenticated: true, loading: false });
      } else {
        setState({ authenticated: false, loading: false });
      }
    })
  }, []);

  return state.loading === true ? 
  (
    <h2>Loading...</h2>
  ) 
  : 
  (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <PrivateRoute path="/chat" authenticated={state.authenticated} component={Chat}></PrivateRoute>
        <PublicRoute path="/signup" authenticated={state.authenticated} component={SignUp}></PublicRoute>
        <PublicRoute path="/login" authenticated={state.authenticated} component={Login}></PublicRoute>
      </Switch>
    </Router>
  );
};

export default App;
