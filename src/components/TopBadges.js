// components/TopBadges.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TopBadges = ({ navigation }) => {
    return (
        <View style={styles.container}>
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
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        backgroundColor: '#f2f2f2',
    },
    badge: {
        fontSize: 16,
        color: '#007bff',
        fontWeight: 'bold',
    },
});

export default TopBadges;
