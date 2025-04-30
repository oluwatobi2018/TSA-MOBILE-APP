// MyProfileScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';

const MyProfileScreen = ({ navigation }) => {
  const [name, setName] = useState('Your Name');
  const [email, setEmail] = useState('youremail@example.com');

  const handleUpdateProfile = () => {
    Alert.alert('Success', 'Profile updated successfully');
  };

  return (
    <View style={styles.container}>
      <View style={styles.badgeContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.badge}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Social')}>
          <Text style={styles.badge}>Social</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Links')}>
          <Text style={styles.badge}>Links</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Button title="Update Profile" onPress={handleUpdateProfile} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  badgeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  badge: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007bff',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 20,
  },
});

export default MyProfileScreen;

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

// LinksScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LinksScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Welcome to Links</Text>
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

export default LinksScreen;



