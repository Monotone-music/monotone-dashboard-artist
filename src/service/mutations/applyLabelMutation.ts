import { useMutation } from "@tanstack/react-query";
import { applyLabel } from "../labelService";
import { useAuthStore } from "@/store/useAuthStore";

export const useApplyLabel = () => {
    const {token} = useAuthStore()
    return useMutation({
      mutationFn: (data: any) => applyLabel(token!, data),
    });
};