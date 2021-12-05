// akcije

const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";

// action creator

export const loginUser = (username, password) => ({
  type: LOGIN_USER,
  payload: { username, password },
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

// inital state

const initialState = {
  user: null,
  isLoggedIn: false,
};

// reducer
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, isLoggedIn: true };
    case LOGOUT_USER:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};
