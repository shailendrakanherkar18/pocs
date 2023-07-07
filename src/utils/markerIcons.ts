import { Markers } from "../assets";
import { CIRCLE, HEXAGON, SQUARE, TRIANGLE } from "../constant/constants";

const markerIcons = (type: string) => {
  const { squareImage, HexagonImage, triangleImage, circleImage } = Markers;

  switch (type) {
    case SQUARE:
      return {
        url: squareImage,
        scaledSize: new window.google.maps.Size(30, 30),
      };

    case HEXAGON:
      return {
        url: HexagonImage,
        scaledSize: new window.google.maps.Size(30, 30),
      };

    case TRIANGLE:
      return {
        url: triangleImage,
        scaledSize: new window.google.maps.Size(50, 50),
      };

    case CIRCLE:
      return {
        url: circleImage,
        scaledSize: new window.google.maps.Size(35, 35),
      };
  }
};

export default markerIcons;
