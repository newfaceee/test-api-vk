import { config } from "../../config";

export const SET_USER_LOADING_STATUS = "SET_USER_LOADING_STATUS";
export const SET_LOGGED_IN = "SET_LOGGED_IN";

const setLoadingStatus = (status) => ({
  type: SET_USER_LOADING_STATUS,
  payload: status,
});

const setLoggedIn = (loggedIn) => ({
  type: SET_LOGGED_IN,
  payload: loggedIn,
});

export const checkLoginStatus = () => {
  return (dispatch) => {
    dispatch(setLoadingStatus(true));

    window.VK.Auth.getLoginStatus(({ session }) => {
      if (!session) {
          dispatch(login());
      } else {
        dispatch(setLoggedIn("success"));
      }
    });
  };
};

export const login = () => {
  return (dispatch) => {
    dispatch(setLoadingStatus(true));

    window.VK.Auth.login((authResult) => {
      if (!authResult.session) {
        dispatch(setLoggedIn("failed"));
      } else {
        dispatch(setLoggedIn("success"));
      }
    }, config.permissions);
  };
};
