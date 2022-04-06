import { SET_LOGIN } from './actions.types';

const loginAction = ({ name, gravatarEmail }) => ({
  type: SET_LOGIN,
  name,
  gravatarEmail,
});

export default loginAction;
