import React, { useState } from "react";
import { Map, Marker } from "@vis.gl/react-google-maps";

const GoogleMaps = () => {
  const [markerLocation, setMarkerLocation] = useState({
    lat: 55.607343,
    lng: 12.980678,
  });

  return (
    <div className="map-container">
      <Map
        style={{ borderRadius: "20px" }}
        defaultZoom={13}
        defaultCenter={markerLocation}
        gestureHandling={"greedy"}
        disableDefaultUI
      >
        <Marker position={markerLocation} />
      </Map>
    </div>
  );
};

export default GoogleMaps;
