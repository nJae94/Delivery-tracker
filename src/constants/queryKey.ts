export const QueryKey = {
  Carriers: 'Carriers',
  Track: (id: string, trackId: number) => ['Track', id, trackId] as const,
};
