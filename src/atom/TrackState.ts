import { atom } from 'recoil';
import { Track } from '../model/Carrier';

const TrackState = atom<Track[]>({
  key: 'Track',
  default: [],
});

export default TrackState;
