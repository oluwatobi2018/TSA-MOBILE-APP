// metro.config.js
const { getDefaultConfig } = require('metro-config');

module.exports = {
  transformer: {
    // Enable support for TypeScript or JSX transformation
    babelTransformerPath: require.resolve('react-native-typescript-transformer')
  },
  resolver: {
    // Customize module resolution settings (optional)
    blacklistRE: /#.*$/, // Example to blacklist certain files, such as test files
    extraNodeModules: {
      // Example to include additional libraries or change paths for modules
    }
  },
  watchFolders: [
    // Specify additional folders to watch for file changes, if necessary
  ]
};

