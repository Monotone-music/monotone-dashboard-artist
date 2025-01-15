import {useAuthStore} from "@/store/useAuthStore";

export const useLogout = () => {
    const { logout } = useAuthStore();
    return () => {
      // Clear local storage
      localStorage.clear();
      // Execute store logout
      logout();
    };
  };