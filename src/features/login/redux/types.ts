export interface User {
  username: string | null;
  email: string | null;
  accessToken: string | null;
  refreshToken: string | null;
}

export interface AuthState {
  user: User;
}
