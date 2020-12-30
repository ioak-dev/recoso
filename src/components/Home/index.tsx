import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './style.scss';

interface Props {
  setProfile: Function;
  profile: any;
  match: any;
  history: any;
}

const Home = (props: Props) => {
  const authorization = useSelector(state => state.authorization);
  return (
    <div className="home full">
      <div className="space-bottom-4">
        Copy below token as Authorization key on the request header from postman
      </div>
      <div className="auth-token">{authorization.token}</div>
    </div>
  );
};

export default Home;
