import { refreshToken } from "../api/api-calls/identityApiCalls";
import { Token } from "../api/api-interfaces/token";
import { jwtDecode } from "jwt-decode";

export const setToken = (token: Token) => {
  localStorage.setItem("user", JSON.stringify(token));
};

export const deleteToken = () => {
  localStorage.removeItem("user");
};

export const decodeToken = (token: string): any => {
  try {
    return jwtDecode(token);
  } catch (error) {
    throw new Error("Invalid token format or decoding failed");
  }
};

export const refreshTokenIfNeeded = async (token: Token) => {
  if (token) {
    const { exp } = decodeToken(token.accessToken);

    const currentTime = new Date().getTime() / 1000;

    if (currentTime + 300 > exp) {
      try {
        const { tokenData } = await refreshToken(token);
        setToken(tokenData);
      } catch {
        deleteToken();
        window.location.href = "/login";
      }
    }
  }
  return token;
};

export const getToken = async () => {
  const user = localStorage.getItem("user");
  const token = user == null ? null : JSON.parse(user);
  return await refreshTokenIfNeeded(token);
};
