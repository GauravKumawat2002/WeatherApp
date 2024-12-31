import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import LocationFetcher from "../components/locationFetcher"; // Fix casing issue
import WeatherDisplay from "../components/WeatherDisplay";
import { fetchWeather } from "../services/weatherService";
import { registerForPushNotificationsAsync } from "../services/notificationService";
import { registerWeatherTask } from "../tasks/weatherTask";

interface LocationCoords {
  latitude: number;
  longitude: number;
}

const HomeScreen = () => {
  const [location, setLocation] = useState<LocationCoords | null>(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    registerForPushNotificationsAsync();
    registerWeatherTask();
  }, []);

  useEffect(() => {
    if (location) {
      (async () => {
        const weather = await fetchWeather(location.latitude, location.longitude);
        setWeatherData(weather);
      })();
    }
  }, [location]);

  return (
    <View style={styles.container}>
      <LocationFetcher onLocationRetrieved={coords => setLocation({ latitude: coords.latitude, longitude: coords.longitude })} />
      <WeatherDisplay weatherData={weatherData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default HomeScreen;
