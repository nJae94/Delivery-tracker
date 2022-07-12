import { Instance } from './axios';

export const TrackerApi = {
  getCarriers: async () => {
    const res = await Instance.get('/');

    return res.data;
  },
};
