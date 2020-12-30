import React from 'react';

import './Links.scss';
import { NavLink } from 'react-router-dom';
import OakButton from '../../oakui/OakButton';

interface Props {
  space: string;
}

const Links = (props: Props) => {
  return (
    <div className="links">
      <NavLink
        to={`/home`}
        className="navitem"
        activeClassName="active"
      >
        Home
      </NavLink>
      <NavLink
        to={`/upload`}
        className="navitem"
        activeClassName="active"
      >
        Upload Documents
      </NavLink>
    </div>
  );
};

export default Links;
