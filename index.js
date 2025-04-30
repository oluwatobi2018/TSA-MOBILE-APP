import { AppRegistry } from 'react-native';
import App from './App'; // Import your main app component
import { name as appName } from './app.json'; // The app name from app.json

// Register the main app component with the React Native app registry
AppRegistry.registerComponent(appName, () => App);

