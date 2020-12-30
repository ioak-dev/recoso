import React, { useEffect, useState } from 'react';
import { useSelector, connect, useDispatch } from 'react-redux';
import { getProfile, setProfile } from '../../actions/ProfileActions';

import './NavElements.scss';
import NavGroup from './NavGroup';
import NavItem from './NavItem';

interface Props {
  space: string;
  closeAfterRouteChange?: boolean;
  //   history: any;
  //   cookies: any;
  //   location: any;
  //   match: any;
}

const NavElements = (props: Props) => {
  const authorization = useSelector(state => state.authorization);

  const profile = useSelector(state => state.profile);

  const dispatch = useDispatch();

  return (
    <div className="nav-elements">
      <NavItem
        to={`/home`}
        label="Home"
        closeAfterRouteChange={props.closeAfterRouteChange}
      />
      <NavItem
        to={`/upload`}
        label="Upload Documents"
        closeAfterRouteChange={props.closeAfterRouteChange}
      />
    </div>
  );
};

export default NavElements;
