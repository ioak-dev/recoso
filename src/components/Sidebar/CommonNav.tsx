import React, { useEffect, useState } from 'react';
import { useSelector, connect, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getProfile, setProfile } from '../../actions/ProfileActions';

import './CommonNav.scss';

interface Props {
  space: string;
  closeAfterRouteChange?: boolean;
  //   history: any;
  //   cookies: any;
  //   location: any;
  //   match: any;
}

const CommonNav = (props: Props) => {
  const authorization = useSelector(state => state.authorization);

  const profile = useSelector(state => state.profile);

  const dispatch = useDispatch();

  const toggleSidebar = () => {
    dispatch(setProfile({ ...profile, sidebar: !profile.sidebar }));
  };

  const routeChanged = () => {
    if (props.closeAfterRouteChange) {
      dispatch(setProfile({ ...profile, sidebar: false }));
    }
  };

  return (
    <div className="common-nav">
      <NavLink
        to={`/${props.space}/home`}
        className="navitem"
        activeClassName="active"
        onClick={routeChanged}
      >
        Home
      </NavLink>
      <NavLink
        to={`/${props.space}/project`}
        className="navitem"
        activeClassName="active"
        onClick={routeChanged}
      >
        Projects
      </NavLink>
      <NavLink
        to={`/${props.space}/email-server`}
        className="navitem"
        activeClassName="active"
        onClick={routeChanged}
      >
        Email Servers
      </NavLink>
      <NavLink
        to={`/${props.space}/template`}
        className="navitem"
        activeClassName="active"
        onClick={routeChanged}
      >
        Templates
      </NavLink>
    </div>
  );
};

export default CommonNav;
