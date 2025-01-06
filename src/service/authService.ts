import { LoginData } from "@/interface/Login";
import apiClient from "./apiClient";

export const signIn = async (data: LoginData) => {
    return (await apiClient.post('/auth/login?flag=artist', data));
}

export const refreshTokenApi2 = async () => {
    
    const response = await apiClient.post('/auth/refresh?flag=artist', {
      refreshToken: localStorage.getItem('refreshToken')
    });
    return response.data.data;
  };

