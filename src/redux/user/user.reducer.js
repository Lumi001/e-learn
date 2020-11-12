const INITIAL_STATE = {};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        isSignedIn: true,
        token: action.payload
      };
    case 'SIGN_OUT':
      return {};
    default:
      return state;
  }
};

export default userReducer;