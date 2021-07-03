import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Artist from './components/Artist';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

const NotFound = () => (
  <div className='container mx-auto'>
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='w-login'>
        <h1>404 - Not Found!</h1>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <PrivateRoute path="/artist" exact>
          <Artist />
        </PrivateRoute>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
