import { Carrier } from '../model/Carrier';
import { Instance } from './axios';

export const TrackerApi = {
  getCarriers: async () => {
    const res = await Instance.get<Carrier[]>('/');

    return res.data;
  },
};
