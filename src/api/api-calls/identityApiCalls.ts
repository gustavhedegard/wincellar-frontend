import { LoginDetails } from "../api-interfaces/loginDetails";
import { RegisterUserDetails } from "../api-interfaces/registerUserDetails";
import { TokenData } from "../api-interfaces/token";
import { fetchHttpWithoutAuth } from "../httpApiCalls";

export const registerUser = async (
  registerUserDetails: RegisterUserDetails
): Promise<void> => {
  return await fetchHttpWithoutAuth("identity/login", registerUserDetails);
};

export const loginUser = async (
  loginDetails: LoginDetails
): Promise<TokenData> => {
  return await fetchHttpWithoutAuth("identity/login", loginDetails);
};
