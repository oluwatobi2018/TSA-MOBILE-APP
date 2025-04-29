import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ContactItem = ({ contact, onPress }) => {
  const { givenName, familyName, phoneNumbers, thumbnailPath } = contact;
  const fullName = `${givenName || ''} ${familyName || ''}`.trim();
  const phone = phoneNumbers?.[0]?.number || 'No phone';
  const avatar = thumbnailPath || 'https://via.placeholder.com/48';

  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress?.(contact)}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>{fullName}</Text>
        <Text style={styles.phone}>{phone}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#eee',
  },
  info: {
    marginLeft: 12,
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  phone: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
});

export default ContactItem;
