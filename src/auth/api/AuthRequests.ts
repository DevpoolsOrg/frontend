import httpClientAdapter from "@/adapters/httpClient.adapter";



import { UserResponseApi } from "@/auth/interfaces/user.interface";
import { AxiosResponse } from "axios";

export class AuthRequests {
    
    private static baseUrl = import.meta.env.VITE_URL_API;

    static async login(data: { email: string, password: string }) {
   
            const response = await httpClientAdapter.post<UserResponseApi>(`${this.baseUrl}/api/auth/login`, data, { withCredentials: true });
            return response;
   
    };

    static async register(data: { email: string, password: string }) {
      
            const response = await httpClientAdapter.post<UserResponseApi>(`${this.baseUrl}/api/auth/register`, data);
            return response;
  
    };

    static async checkAuth() {
            const response = await httpClientAdapter.get<UserResponseApi>(`${this.baseUrl}/api/auth/check-auth-status`, {withCredentials: true});
            return response;
    };

    static async logout() {
            return await httpClientAdapter.get<Promise<void>>(`${this.baseUrl}/api/auth/logout`, { withCredentials: true });
        }

  
};

    
