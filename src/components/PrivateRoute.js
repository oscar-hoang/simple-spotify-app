import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Redirect,
  useLocation,
  useHistory
} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();
  const history = useHistory();

  const substring = location.hash.substring(1);
  if (substring) {
    const subs = substring.split('&');
    const accessToken = subs[0]?.split('=')[1] || '';
    const tokenType = subs[1]?.split('=')[1];
    const expireIn = subs[2]?.split('=')[1] || 0;

    localStorage.setItem('token', JSON.stringify({
      accessToken,
      tokenType,
      expireIn
    }));

    history.push({});
  }

  const token = localStorage.getItem('token');
  if (!token) {
    return <Redirect to='/' />;
  }
  return <Route {...rest} render={(props) => (<Component {...props} />)}/>;
};

PrivateRoute.propTypes = {
  component: PropTypes.elementType
};

export default PrivateRoute;
