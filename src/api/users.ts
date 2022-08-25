import axios, { AxiosResponse } from 'axios';
import { User, UserResponce } from '../interfaces/User';
import API_BASE_URL from './constants';

const usersEndpoint = `${API_BASE_URL}/users`;

// export enum responseStatus12 {
//   OK = 200,
//   INCORRECT_EMAIL_PASSWORD = 422,
//   EXPECTATION_FAILED = 417,
//   UNAUTHORIZE = 401,
//   INVALID_PASS_OR_LOGIN = 403,
//   USER_NAME_ALREADY_REGISTERED = 409,
// }

/*
response body
{
  "id": "63076f36c3a76a001686dc14",
  "name": "Sergey",
  "email": "sergey@gmail.com"
}
*/
export const createUser = async (creatingUser: User): Promise<UserResponce> => {
  const response: AxiosResponse<UserResponce, undefined> = await axios.post(
    `${usersEndpoint}`,
    creatingUser
  );
  return response.data;
};

export default createUser;
