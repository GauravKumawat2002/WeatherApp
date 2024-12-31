import * as TaskManager from "expo-task-manager";
import * as BackgroundFetch from "expo-background-fetch";
import { fetchWeather } from "../services/weatherService";
import * as Notifications from "expo-notifications";
import * as Location from "expo-location";

const WEATHER_TASK = "WEATHER_UPDATE_TASK";

TaskManager.defineTask(WEATHER_TASK, async () => {
  console.log("Running weather update task...");
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    console.error("Permission to access location was denied");
    return BackgroundFetch.BackgroundFetchResult.Failed;
  }

  const location = await Location.getCurrentPositionAsync({});
  const weatherData = await fetchWeather(location.coords.latitude, location.coords.longitude);

  if (weatherData) {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Weather Update",
        body: `It's currently ${weatherData.main.temp}°C with ${weatherData.weather[0].description}`,
      },
      trigger: null,
    });
  }

  return BackgroundFetch.BackgroundFetchResult.NewData;
});

export const registerWeatherTask = async () => {
  await BackgroundFetch.registerTaskAsync(WEATHER_TASK, {
    minimumInterval: 15 * 60, // 15 minutes
    stopOnTerminate: false,
    startOnBoot: true,
  });
  console.log("Weather update task registered");
};
