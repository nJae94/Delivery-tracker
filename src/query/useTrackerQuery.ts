import { useQuery } from 'react-query';
import { TrackerApi } from '../api/Tracker';

export const useGetCarriers = () => {
  const { data } = useQuery('Carriers', TrackerApi.getCarriers, {
    staleTime: 1000 * 60 * 5,
  });

  return data;
};
