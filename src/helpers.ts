import {
  PerspectiveCamera,
  Scene,
  AmbientLight,
  WebGLRenderer,
  Matrix4,
  DirectionalLight,
} from "three";

import {
  MarkerClusterer,
  SuperClusterAlgorithm,
} from "@googlemaps/markerclusterer";

import {
  ICoordinate,
  IDrawLineProps,
  IMarkerCoordinates,
} from "./types/coordinates";

import { CURRENT_COORDS } from "./constant/constants";

import "./App.css";
import markerIcons from "./utils/markerIcons";

const mapOptions = {
  center: CURRENT_COORDS,
};

export function createOverlay(map: google.maps.Map) {
  //The WebGL Overlay View provides direct access to the same WebGL
  //rendering context Google Maps Platform uses to render the vector basemap.
  const overLay: google.maps.WebGLOverlayView =
    new window.google.maps.WebGLOverlayView();
  let renderer: WebGLRenderer, scene: Scene, camera: PerspectiveCamera;

  /* WebGL Overlay View provides a set of hooks that are called at various
  times in the lifecycle of the WebGL rendering context of the vector basemap.
  These lifecycle hooks are where you setup, draw, and tear down anything 
  you want rendered in the overlay. */

  /* onAdd() is called when the overlay is created and it don’t require 
  immediate access to the WebGL rendering context. */
  overLay.onAdd = () => {
    try {
      scene = new Scene();
      camera = new PerspectiveCamera();
      const light = new AmbientLight(0xffffef, 0.5);
      scene.add(light);

      const directionLight = new DirectionalLight(0xffffff, 0.25);
      directionLight.position.set(0.5, -1, 0.5);
      scene.add(directionLight);
    } catch (e) {
      console.log(e);
    }
  };

  /* called once when the rendering context is available. Use it to initialize
  or bind any WebGL state such as shaders, GL buffer objects, and so on. */
  overLay.onContextRestored = ({ gl }: google.maps.WebGLStateOptions) => {
    try {
      renderer = new WebGLRenderer({
        canvas: gl.canvas,
        context: gl,
        ...gl.getContextAttributes(),
      });
      renderer.autoClear = false;
    } catch (e) {
      console.log(e);
    }
  };

  /* renders the scene on the basemap. 
  1. gl is a handle to the WebGLRenderingContext used by the basemap.
  2. transformer provides helper functions to transform from map coordinates
  to model-view-projection matrix, which can be used to translate map 
  coordinates to world space, camera space, and screen space.

  */
  overLay.onDraw = ({ gl, transformer }: google.maps.WebGLDrawOptions) => {
    try {
      const matrix: Float64Array = transformer.fromLatLngAltitude({
        lat: mapOptions.center.lat,
        lng: mapOptions.center.lng,
        altitude: 120,
      });

      camera.projectionMatrix = new Matrix4().fromArray(matrix);

      overLay.requestRedraw();
      renderer.render(scene, camera);
      renderer.resetState();
      overLay.setMap(map);
      return overLay;
    } catch (e) {
      console.log(e);
    }
  };
}

export const drawLineOnCoordinates = (
  linesToBeDraw: IDrawLineProps[],
  map: google.maps.Map
) => {
  const linesArray: google.maps.Polyline[] = [];

  linesToBeDraw.map((item: IDrawLineProps) => {
    const lineCoordinates = item.coordinates.map((coord: any) => ({
      lat: coord.lat,
      lng: coord.lng,
    }));

    const polyLine: google.maps.Polyline = new window.google.maps.Polyline({
      path: lineCoordinates,
      geodesic: true,
      strokeColor: item.color,
      strokeOpacity: item.opacity,
      strokeWeight: item.weight,
    });

    linesArray.push(polyLine);
  });

  linesArray.forEach((lines: any) => {
    lines.setMap(map);
  });
};

export const drawMarkerOnCoordinates = (
  coordinates: IMarkerCoordinates[],
  map: google.maps.Map
) => {
  const infowindow: google.maps.InfoWindow = new google.maps.InfoWindow();

  const geoCoder: google.maps.Geocoder = new google.maps.Geocoder();

  const markers = coordinates.map(({ Marker, Lattitude, Longitudes }) => {
    let marker: google.maps.Marker = new window.google.maps.Marker({
      position: { lat: Lattitude, lng: Longitudes },
      icon: markerIcons(Marker),
    });

    marker.addListener("mouseover", () => {
      let position: ICoordinate = {
        lat: Lattitude,
        lng: Longitudes,
      };
      geoCoder.geocode({ location: position }).then((response) => {
        infowindow.setContent(
          `<h3>${response.results[0].formatted_address}</h3>`
        );
      });

      infowindow.open({
        anchor: marker,
        map,
      });

      infowindow.focus();
    });

    marker.addListener("mouseout", () => {
      infowindow.close();
    });

    return marker;
  });

  /* MarkerClusterer creates and manages per-zoom-level clusters for large
  amounts of markers. */
  new MarkerClusterer({
    markers,
    map,
    algorithm: new SuperClusterAlgorithm({ radius: 200 }),
  });
};
