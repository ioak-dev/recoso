import React from 'react';

import { Route } from 'react-router-dom';
import './style.scss';
import Home from '../Home';
import OaLogin from '../Auth/OaLogin';
import Landing from '../Landing';
import { Authorization } from '../Types/GeneralTypes';
import OakRoute from '../Auth/OakRoute';
import Unauthorized from '../Auth/Unauthorized';
import OneAuth from '../Login/OneAuth/index';
import Login from '../Login/index';
import UploadDocuments from '../UploadDocuments';

interface Props {
  getProfile: Function;
  setProfile: Function;
  getAuth: Function;
  addAuth: Function;
  removeAuth: Function;
  getUser: Function;
  addUser: Function;
  cookies: any;

  // event: PropTypes.object,
  profile: any;
  authorization: Authorization;
}

const RouterView = (props: Props) => {
  return (
    <div className="app-container--main--body">
      <Route
        path="/login"
        render={propsLocal => (
          <OakRoute {...propsLocal} {...props} component={OaLogin} />
        )}
      />
      <Route
        path="/unauthorized"
        render={propsLocal => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={Unauthorized}
            middleware={['authenticate']}
          />
        )}
      />
      <Route
        path="/"
        exact
        render={propsLocal => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={Landing}
            middleware={['readAuthentication']}
          />
        )}
      />
      <Route
        path="/home"
        exact
        render={propsLocal => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={Landing}
            middleware={['authenticate']}
          />
        )}
      />
      <Route
        path="/upload"
        exact
        render={propsLocal => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={UploadDocuments}
            middleware={['authenticate']}
          />
        )}
      />
      <Route
        path="/login/home"
        render={propsLocal => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={Login}
            middleware={['readAuthentication']}
          />
        )}
      />
      <Route
        path="/login/oa"
        render={propsLocal => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={OneAuth}
            middleware={['readAuthentication']}
          />
        )}
      />
    </div>
  );
};

export default RouterView;
