const initialAuthState = {
  user: {},
  success: null,
  error: null,
  isLoggedin: false,
  inProgress: false,
};

export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
