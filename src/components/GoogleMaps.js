import React, { useState } from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const GoogleMaps = () => {
  const [markerLocation, setMarkerLocation] = useState({
    lat: 55.607343,
    lng: 12.980678,
  });

  return (
    <div className="map-container">
      <APIProvider
        apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        onLoad={() => console.log("Maps API has loaded.")}
      >
        <Map
          defaultZoom={16}
          defaultCenter={markerLocation}
          onCameraChanged={(ev) =>
            console.log(
              "camera changed:",
              ev.detail.center,
              "zoom:",
              ev.detail.zoom
            )
          }
        >
          <Marker position={markerLocation} />
        </Map>
      </APIProvider>
    </div>
  );
};

export default GoogleMaps;
