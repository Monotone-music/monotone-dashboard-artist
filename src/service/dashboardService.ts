import apiClient from "./apiClient";

export interface DashboardStats {
  totalViews: number;
  totalRecordings: number;
  label: string;
  estimatedEarnings: number;
}

export const getArtistAnalytics = async (): Promise<DashboardStats> => {
  const [statsResponse, earningsResponse] = await Promise.all([
    apiClient.get('/artist/statistics'),
    apiClient.get('/artist/earnings')
  ]);

  return {
    ...statsResponse.data.data,
    estimatedEarnings: earningsResponse.data.data
  };
};

  export interface ViewData {
    month: string;
    desktop: number;
  }
  
  export const getCharts = async (): Promise<ViewData[]> => {
    const response = await apiClient.get('/artist/views');
    return response.data.data;
  };
  
  export const formatChartData = (data: Record<string, number>): ViewData[] => {
    return Object.entries(data).map(([key, value]) => ({
      month: key,
      desktop: value
    }));
  };

  export interface TopTrack {
    _id: string;
    title: string;
    duration: number;
    totalViews: number;
  }
  
  export const getTopTracks = async (): Promise<TopTrack[]> => {
    const response = await apiClient.get('/artist/top');
    return response.data.data;
  };
  
