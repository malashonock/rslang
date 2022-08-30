interface UserCommon {
  id: string;
  name: string;
  email: string;
  password: string;
  responseStatus: number;
}

export type User = Omit<UserCommon, 'id' | 'responseStatus'>;

export type UserResponse = Omit<UserCommon, 'password' | 'responseStatus'>;

export type UserDeleted = Pick<UserCommon, 'id' | 'responseStatus'>;
