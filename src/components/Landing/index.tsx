import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './style.scss';
import { NavLink } from 'react-router-dom';
import OakButton from '../../oakui/OakButton';
import OakSpinner from '../../oakui/OakSpinner';
import AssetItem from './AssetItem';
import ListAssets from './ListAssets';
import ListSpaces from './ListSpaces';
import GettingStartedAsset from './GettingStartedAsset';
import OakFooter from '../../oakui/OakFooter';
import OakPage from '../../oakui/OakPage';
import OakSection from '../../oakui/OakSection';

interface Props {
  history: any;
}

const Landing = (props: Props) => {
  const authorization = useSelector(state => state.authorization);

  const goToLogin = () => {
    window.location.href = `${process.env.REACT_APP_ONEAUTH_URL}/#/appspace/${process.env.REACT_APP_ONEAUTH_APPSPACE_ID}/login?type=signin&appId=${process.env.REACT_APP_ONEAUTH_APP_ID}`;
  };

  return (
    <div className="landing">
      <OakPage>
        <OakSection>
          {authorization.isAuth && (
            <div className="typography-10">Welcome home</div>
          )}
          {!authorization.isAuth && (
            <div className="typography-6">
              You are not logged in
              <OakFooter align="left">
                <OakButton theme="primary" variant="appear" action={goToLogin}>
                  Login
                </OakButton>
              </OakFooter>
            </div>
          )}
        </OakSection>
      </OakPage>
    </div>
  );
};

export default Landing;
