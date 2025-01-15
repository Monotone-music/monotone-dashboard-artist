import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "@/store/useAuthStore";
import { getRequestLabel } from "@/service/labelService";

export const useLabelRequests = (status: 'pending' | 'approved' | 'rejected') => {
  const { token } = useAuthStore();

  return useQuery({
    queryKey: ['labelRequests', status],
    queryFn: () => getRequestLabel(token!, status),
    enabled: !!token
  });
};