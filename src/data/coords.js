import { CIRCLE, HEXAGON, SQUARE, TRIANGLE } from "../constant/constants";

const amarTechParkCoords = [
  { lat: 18.5751925, lng: 73.7651096 },
  { lat: 18.5752589, lng: 73.7647635 },
  { lat: 18.5762808, lng: 73.7648507 },
  { lat: 18.5767153, lng: 73.7649639 },
  { lat: 18.5772603, lng: 73.7650805 },
  { lat: 18.577313, lng: 73.7654597 },
  { lat: 18.5764041, lng: 73.765676 },
  { lat: 18.5755892, lng: 73.7655018 },
  { lat: 18.5751925, lng: 73.7651096 },
];

const hyderabadCoords = [
  { lat: 18.5793587, lng: 73.7593831 },
  { lat: 18.5793273, lng: 73.7581551 },
  { lat: 18.5781163, lng: 73.757075 },
  { lat: 18.5742887, lng: 73.7581692 },
  { lat: 18.5722867, lng: 73.7589481 },
  { lat: 18.572321, lng: 73.7641496 },
  { lat: 18.5773425, lng: 73.7624156 },
  { lat: 18.5784872, lng: 73.7612797 },
  { lat: 18.5793587, lng: 73.7593831 },
];

export const linesToBeDraw = [
  {
    coordinates: amarTechParkCoords,
    color: "#FF0000",
    opacity: 0.75,
    weight: 5,
  },
  { coordinates: hyderabadCoords, color: "#023020", opacity: 0.75, weight: 5 },
];

export const coordinates = [
  { Marker: CIRCLE, Lattitude: 18.5204, Longitudes: 73.8567 },
  { Marker: HEXAGON, Lattitude: 18.4204, Longitudes: 73.7567 },
  { Marker: SQUARE, Lattitude: 18.6204, Longitudes: 73.6567 },
  { Marker: CIRCLE, Lattitude: 18.7204, Longitudes: 73.5567 },
  { Marker: TRIANGLE, Lattitude: 18.8204, Longitudes: 73.4567 },
  { Marker: CIRCLE, Lattitude: 18.9204, Longitudes: 73.3567 },
  { Marker: TRIANGLE, Lattitude: 18.3204, Longitudes: 73.25671 },
  { Marker: HEXAGON, Lattitude: 18.2204, Longitudes: 73.1567 },
  { Marker: SQUARE, Lattitude: 18.1204, Longitudes: 73.0567 },
  { Marker: SQUARE, Lattitude: 18.0204, Longitudes: 73.9567 },
  { Marker: TRIANGLE, Lattitude: 21.046633, Longitudes: 79.08886 },
  { Marker: HEXAGON, Lattitude: 21.146633, Longitudes: 79.98886 },
  { Marker: SQUARE, Lattitude: 21.246633, Longitudes: 79.88886 },
  { Marker: TRIANGLE, Lattitude: 21.346633, Longitudes: 79.78886 },
  { Marker: CIRCLE, Lattitude: 21.446633, Longitudes: 79.68886 },
  { Marker: SQUARE, Lattitude: 21.546633, Longitudes: 79.58886 },
  { Marker: HEXAGON, Lattitude: 21.6466331, Longitudes: 79.48886 },
  { Marker: TRIANGLE, Lattitude: 21.746633, Longitudes: 79.38886 },
  { Marker: CIRCLE, Lattitude: 21.846633, Longitudes: 79.28886 },
  { Marker: TRIANGLE, Lattitude: 21.946633, Longitudes: 79.18886 },
  { Marker: CIRCLE, Lattitude: 19.8762, Longitudes: 75.9433 },
  { Marker: HEXAGON, Lattitude: 19.9762, Longitudes: 75.8433 },
  { Marker: TRIANGLE, Lattitude: 19.7762, Longitudes: 75.74338 },
  { Marker: HEXAGON, Lattitude: 19.6762, Longitudes: 75.64339 },
  { Marker: SQUARE, Lattitude: 19.5762, Longitudes: 75.5433 },
  { Marker: CIRCLE, Lattitude: 19.4762, Longitudes: 75.1433 },
  { Marker: HEXAGON, Lattitude: 19.3762, Longitudes: 75.0433 },
  { Marker: CIRCLE, Lattitude: 19.27627, Longitudes: 75.2433 },
  { Marker: SQUARE, Lattitude: 19.17624, Longitudes: 75.3433 },
  { Marker: TRIANGLE, Lattitude: 19.80762, Longitudes: 75.4433 },
  { Marker: CIRCLE, Lattitude: 17.7677, Longitudes: 73.191 },
];
