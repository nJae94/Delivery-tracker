import axios from 'axios';

export const Instance = axios.create({
  headers: { 'content-type': 'application/json' },
  baseURL: 'https://apis.tracker.delivery/carriers',
});
