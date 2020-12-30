import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ProfileReducer from './ProfileReducer';
import UserReducer from './UserReducer';
import SpaceReducer from './SpaceReducer';
import ProjectReducer from './ProjectReducer';
import DomainReducer from './DomainReducer';
import CustomEndpointReducer from './CustomEndpointReducer';
import EndpointReducer from './EndpointReducer';
import AssetReducer from './AssetReducer';

export default combineReducers({
  authorization: AuthReducer,
  profile: ProfileReducer,
  user: UserReducer,
  space: SpaceReducer,
  asset: AssetReducer,
  project: ProjectReducer,
  domain: DomainReducer,
  customEndpoint: CustomEndpointReducer,
  endpoint: EndpointReducer,
});
