import React, { useCallback, useState } from "react";
import { GoogleMapProvider } from "@ubilabs/google-maps-react-hooks";

import {
  createOverlay,
  drawLineOnCoordinates,
  drawMarkerOnCoordinates,
} from "./helpers";

import { coordinates, linesToBeDraw } from "./data/coords";
import { CURRENT_COORDS, MAP_ID, VERSION } from "./constant/constants";

import "./App.css";

function App() {
  //To get reference of div (container) in the state.
  const [mapContainer, setMapContainer] = useState<HTMLDivElement>();

  //memoized version of the callback that call only first time.
  const onLoad = useCallback((map: google.maps.Map) => {
    try {
      createOverlay(map);
      drawLineOnCoordinates(linesToBeDraw, map);
      drawMarkerOnCoordinates(coordinates, map);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const mapOptions = {
    //loading the map using a map ID with the vector map enabled.
    mapId: MAP_ID,
    center: CURRENT_COORDS,
    version: VERSION,
    zoom: 13,
    tilt: 25,
    disableDefaultUI: true,
    mapMaker: true,
  };

  return (
    <div>
      <GoogleMapProvider
        googleMapsAPIKey="AIzaSyBa0OchlS4VI6x00sgfDP87ubtG7x527oI"
        options={mapOptions}
        mapContainer={mapContainer}
        onLoad={onLoad}
      >
        {/* attach a map container for rendering map. */}
        <div
          ref={(node: HTMLDivElement) => setMapContainer(node)}
          className="map-container"
        />
      </GoogleMapProvider>
    </div>
  );
}
export default App;
