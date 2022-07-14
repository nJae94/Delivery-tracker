import { useMutation, useQuery } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { TrackerApi } from '../api/Tracker';
import TrackState from '../atom/TrackState';
import { QueryKey } from '../constants/queryKey';

export const useGetCarriers = () => {
  const { data } = useQuery(QueryKey.Carriers, TrackerApi.getCarriers, {
    staleTime: 1000 * 60 * 5,
  });

  return data;
};

export const useGetTrack = () => {
  const setTrackState = useSetRecoilState(TrackState);

  return useMutation(
    ({ id, trackId }: { id: string; trackId: number }) => {
      return TrackerApi.getTrack(id, trackId);
    },
    {
      onSuccess: (data) => {
        setTrackState((prev) => [...prev, data]);
      },
    },
  );
};
