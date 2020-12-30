import React from 'react';

import './DropLinks.scss';
import { NavLink } from 'react-router-dom';
import OakButton from '../../oakui/OakButton';

interface Props {
  space: string;
  handleClose: any;
}

const DropLinks = (props: Props) => {
  return (
    <div className="drop-links">
      <NavLink
        to={`/${props.space}/home`}
        className="navitem"
        activeClassName="active"
        onClick={props.handleClose}
      >
        Home
      </NavLink>
      <NavLink
        to={`/${props.space}/project`}
        className="navitem"
        activeClassName="active"
        onClick={props.handleClose}
      >
        Projects
      </NavLink>
      <NavLink
        to={`/${props.space}/endpoint`}
        className="navitem"
        activeClassName="active"
        onClick={props.handleClose}
      >
        Endpoints
      </NavLink>
    </div>
  );
};

export default DropLinks;
