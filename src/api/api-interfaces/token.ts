export interface TokenData {
  email: string;
  name: string;
  sub: string;
  exp: number;
  iss: string;
}

export interface Token {
  accessToken: string;
  refreshToken: string;
}

export interface TokenData {
  tokenData: Token;
}
