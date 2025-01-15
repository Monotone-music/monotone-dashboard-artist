import apiClient from "./apiClient";

export const getAllLabel = async (token: string) => {
  const response = await apiClient.get("/label/get", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
};

export const getRequestLabel = async (token: string, status: string) => {
  const response = await apiClient.get(`/artist/requests/${status}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
};

export const applyLabel = async (token: string, body: any) => {
  const response = await apiClient.post(`/artist/link`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": 'multipart/form-data'
    },
  });

  console.log("Response: ", response)
  return response.data.data;
};

