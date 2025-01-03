import { Dispatch } from "@reduxjs/toolkit";
import { LoginDetails } from "../../../api/api-interfaces/loginDetails";
import { NavigateFunction } from "react-router-dom";
import { loginUser } from "../../../api/api-calls/identityApiCalls";
import { setUser } from "./authSlice";
import { decodeToken, getToken, setToken } from "../../../common/tokenHandler";
import { routePaths } from "../../../routes/routePaths";

export const handleLogin = async (
  user: LoginDetails,
  dispatch: Dispatch<any>,
  navigate: NavigateFunction
) => {
  try {
    const tokenData = await loginUser(user);
    console.log(tokenData);
    setToken(tokenData);

    const { accessToken, refreshToken } = await getToken();
    console.log("AHA");
    const { username, email } = decodeToken(accessToken);

    dispatch(setUser({ username, email, accessToken, refreshToken }));
    navigate(routePaths.wines);
  } catch (error) {
    console.log("An unexpected error occurred");
  }
};
