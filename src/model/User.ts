export interface User {
  name: string;
  email: string;
  password: string;
}

export interface UserResponce {
  id: string;
  name: string;
  email: string;
}

export interface AuthResponse {
  message: string;
  token: string;
  refreshToken: string;
  userId: string;
  name: string;
}
