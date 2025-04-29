// constants/config.js

const Config = {
    // App Settings
    appName: 'TSA Mobile App',
    version: '1.0.0',
    apiBaseUrl: 'https://api.tsamobileapp.com/v1',
  
    // Authentication
    auth: {
      tokenKey: 'tsa_auth_token',
      refreshTokenKey: 'tsa_refresh_token',
      loginUrl: '/auth/login',
      logoutUrl: '/auth/logout',
    },
  
    // Feature Toggles
    features: {
      enablePushNotifications: true,
      enableDarkMode: true,
    },
  
    // Environment Settings
    environment: process.env.NODE_ENV || 'development', // 'development' | 'production'
  };
  
  export default Config;
