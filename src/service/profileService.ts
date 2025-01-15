import apiClient from "./apiClient";

export const getArtistProfile = async (token: string) => {
  const response = await apiClient.get("/artist/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
};
