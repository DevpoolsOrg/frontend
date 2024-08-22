
import { User } from '@/auth/interfaces/user.interface';
import httpClientAdapter from '@/adapters/httpClient.adapter';
const baseURL = import.meta.env.VITE_API_URL;


export class UserRequest {

  static getUsersApi = async () => {
    const response = await httpClientAdapter.get<User[]>(`${baseURL}/api/users`, { withCredentials:true } );
    return response;
  };
  
  static createUserApi = async (user:User) => {
    const response = await httpClientAdapter.post<User>(`${baseURL}/api/users/create-user`, user, { withCredentials:true });
    return response;
  };
  
  static updateUserRoleApi = async (user:User) => {
    const { roles } = user;
    const response = await httpClientAdapter.patch<User>(`${baseURL}/api/users/change-role/${user.id}`, roles, { withCredentials:true });
    return response;
  };
  
  static deleteUserApi = async (id:string) => {
    const response = await httpClientAdapter.delete<User>(`${baseURL}/api/users/${id}`, { withCredentials:true });
    return response;
  };
}





