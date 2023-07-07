export interface ICoordinate {
  lat: number;
  lng: number;
}

export interface IMarkerCoordinates {
  Marker: string;
  Lattitude: number;
  Longitudes: number;
}

export interface IDrawLineProps {
  coordinates: ICoordinate[];
  color: string;
  opacity: number;
  weight: number;
}
