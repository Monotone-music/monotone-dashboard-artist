import apiClient from "./apiClient";

export interface Artist {
  _id: string;
  name: string;
}

export interface Track {
  _id: string;
  title: string;
  view: number;
  displayedArtist: string;
  available: string;
  duration: number;
  artist: Artist[];
  position: {
    no: number;
    of: number;
  };
  image: string;
  media: string;
}

export const getAvailableTracks = async (): Promise<Track[]> => {
  const response = await apiClient.get('/artist/recording/available');
  return response.data.data;
};

export const getPendingTracks = async (): Promise<Track[]> => {
  const response = await apiClient.get('/artist/recording/pending');
  return response.data.data;
};

export const getQueuedTracks = async (): Promise<Track[]> => {
  const response = await apiClient.get('/artist/recording/queued');
  return response.data.data;
};

export const getRejectedTracks = async (): Promise<Track[]> => {
  const response = await apiClient.get('/artist/recording/rejected');
  return response.data.data;
};

export const updateTrackStatus = async (trackId: string) => {
  const response = await apiClient.patch(`/recording/disable/${trackId}`, {
  });
  return response.data;
};

export const cancelPendingTrack = async (trackId: string) => {
  const response = await apiClient.patch(`/recording/reject/${trackId}`);
  return response.data;
};
