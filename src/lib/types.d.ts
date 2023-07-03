export type Coordinate = {
  lat: number;
  lng: number;
};
export type MarkerData = {
  id: number;
  name: string;
  coordinates: Coordinate;
  content?: string;
};
