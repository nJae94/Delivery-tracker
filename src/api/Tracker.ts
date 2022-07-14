import { Carrier, Track } from '../model/Carrier';
import { Instance } from './axios';

export const TrackerApi = {
  getCarriers: async () => {
    const res = await Instance.get<Carrier[]>('/');

    return res.data;
  },

  getTrack: async (id: string, trackId: number) => {
    const res = await Instance.get<Track>(`/${id}/tracks/${trackId}`);

    return res.data;
  },
};
