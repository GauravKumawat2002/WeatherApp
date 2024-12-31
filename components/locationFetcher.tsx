import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import * as Location from "expo-location";

interface LocationFetcherProps {
  onLocationRetrieved: (coords: Location.LocationObjectCoords) => void;
}

const LocationFetcher: React.FC<LocationFetcherProps> = ({ onLocationRetrieved }) => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      onLocationRetrieved(location.coords);
    })();
  }, []);

  return error ? <Text>Error: {error}</Text> : null;
};

export default LocationFetcher;
