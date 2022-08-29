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

export interface Auth {
  message: string;
  token: string;
  refreshToken: string;
  userId: string;
  name: string;
}
