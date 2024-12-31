# WeatherApp

WeatherApp is a React Native application built using Expo. It retrieves the device's real-time geolocation, fetches weather information using OpenWeatherMap API, and sends weather update notifications every 15 minutes.

---

## Features

- **Real-Time Geolocation:**
  Retrieves the device's current location using Expo's `Location` API.

- **Weather Information:**
  Fetches and displays real-time weather conditions using OpenWeatherMap API.

- **Push Notifications:**
  Sends periodic weather update notifications every 15 minutes, using Expo's `Notifications` API.

---

## File Structure

```plaintext
WeatherApp/
├── assets/                    # Static resources
├── components/                # Reusable components
│   ├── LocationFetcher.js     # Fetches device geolocation
│   ├── WeatherDisplay.js      # Displays weather information
├── services/                  # Utility and API services
│   ├── weatherService.js      # Weather API integration
│   ├── notificationService.js # Push notification handlers
├── tasks/                     # Background tasks
│   ├── weatherTask.js         # Handles periodic weather updates
├── screens/                   # App screens
│   ├── HomeScreen.js          # Main app screen
├── App.js                     # Entry point
├── app.json                   # App configuration
├── .env                       # Environment variables
├── package.json               # Dependencies and scripts
```

---

## Prerequisites

- Node.js and npm installed
- Expo CLI installed globally: `npm install -g expo-cli`
- OpenWeatherMap API key (create one at https://openweathermap.org/api)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/WeatherApp.git
   cd WeatherApp
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:

   ```plaintext
   WEATHER_API_KEY=your_openweathermap_api_key
   ```

4. Start the development server:
   ```bash
   expo start
   ```

---

## Usage

1. Launch the application on your preferred device (physical or emulator).
2. Grant location permissions when prompted.
3. View real-time weather data on the home screen.
4. Receive weather update notifications every 15 minutes.

---

## Configuration

### Push Notifications

To enable push notifications:

1. Ensure that you register for push notifications using `notificationService.js`.
2. In `app.json`, configure your app to use Expo's notification services.

### Weather API

Update `weatherService.js` to customize API endpoints or parameters.

---

## Dependencies

- [Expo](https://expo.dev/)
- [Axios](https://axios-http.com/)
- [Expo Location](https://docs.expo.dev/versions/latest/sdk/location/)
- [Expo Notifications](https://docs.expo.dev/versions/latest/sdk/notifications/)
- [Expo Task Manager](https://docs.expo.dev/versions/latest/sdk/task-manager/)
- [Expo Background Fetch](https://docs.expo.dev/versions/latest/sdk/background-fetch/)
- [react-native-dotenv](https://github.com/goatandsheep/react-native-dotenv)

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Author

- **Your Name**  
   [Your GitHub Profile](https://github.com/your-username/)
  s
