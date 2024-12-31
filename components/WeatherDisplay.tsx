import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
}

interface WeatherDisplayProps {
  weatherData: WeatherData | null;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherData }) => {
  if (!weatherData) return <Text>Loading weather data...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{weatherData.name}</Text>
      <Text style={styles.temp}>{weatherData.main.temp}°C</Text>
      <Text style={styles.description}>{weatherData.weather[0].description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center", marginTop: 20 },
  title: { fontSize: 24, fontWeight: "bold" },
  temp: { fontSize: 48, fontWeight: "bold", marginVertical: 10 },
  description: { fontSize: 16 },
});

export default WeatherDisplay;
