import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { GlobalContext } from '../ContextStore/ContextAPI';

const RootRouteGuard = ({ xComponent: Component, ...xProps }) => {
  const { loginState } = React.useContext(GlobalContext);
  return (
    <Route
      {...xProps}
      render={routeParams => {
        const pathName = routeParams.match.path;
        if (loginState.isLoggedIn) {
          if (pathName === '/login') {
            return <Redirect to="/pets" />;
          }
          return <Component {...routeParams} key={routeParams.match.url} />;
        }
        if (['/login'].includes(pathName)) {
          return <Component {...routeParams} key={routeParams.match.url} />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};
RootRouteGuard.propTypes = {
  xComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

export default RootRouteGuard;
