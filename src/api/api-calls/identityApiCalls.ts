import { LoginDetails } from "../api-interfaces/loginDetails";
import { RegisterUserDetails } from "../api-interfaces/registerUserDetails";
import { Token, TokenData } from "../api-interfaces/token";
import { fetchHttpWithoutAuth } from "../httpApiCalls";

export const registerUser = async (
  registerUserDetails: RegisterUserDetails
): Promise<void> => {
  return await fetchHttpWithoutAuth("identity/login", registerUserDetails);
};

export const loginUser = async (loginDetails: LoginDetails): Promise<Token> => {
  return await fetchHttpWithoutAuth("identity/login", loginDetails);
};

export const refreshToken = async (user: Token): Promise<TokenData> => {
  return await fetchHttpWithoutAuth("Identity/refresh", user);
};
