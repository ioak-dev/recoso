import React, { useEffect, useState } from 'react';
import { useSelector, connect, useDispatch } from 'react-redux';
import './style.scss';
import recosoWhite from '../../images/recoso_white.svg';
import recosoBlack from '../../images/recoso_black.svg';

const Logo = () => {
  const authorization = useSelector(state => state.authorization);

  const profile = useSelector(state => state.profile);

  const dispatch = useDispatch();

  return (
    <div className="logo">
      {profile.theme === 'theme_light' && <img className="logo--image" src={recosoBlack} alt="Recoso logo" />}
      {profile.theme !== 'theme_light' && <img className="logo--image" src={recosoWhite} alt="Recoso logo" />}
    </div>
  );
};

export default Logo;
