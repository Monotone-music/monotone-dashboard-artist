import apiClient from "./apiClient";

export const getArtistProfile = async (token: string) => {
  const response = await apiClient.get("/artist/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
};

export const getPrfileFileName = async (fileName: string, token: string): Promise<string> => {
  const response = await apiClient.get(`/image/${fileName}`, {
      responseType: 'blob',
      headers: { Authorization: `Bearer ${token}` } 
  })

  const blob = response.data;
  const url = URL.createObjectURL(blob);
  return url;
}
