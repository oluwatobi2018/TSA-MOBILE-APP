// SocialScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SocialScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Welcome to Social</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default SocialScreen;
