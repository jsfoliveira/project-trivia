import { GET_GRAVATAR } from '../actions/actions.types';

const INITIAL_STATE = {
  image: '',
};

const gravatar = (state = INITIAL_STATE, action) => {
  const { image } = action;
  switch (action.type) {
  case GET_GRAVATAR:
    return {
      ...state,
      image,
    };
  default:
    return state;
  }
};

export default gravatar;
