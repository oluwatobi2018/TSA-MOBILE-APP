import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SideMenuScreen = ({ navigation }) => {
    const handleNavigation = (screen) => {
        navigation.navigate(screen);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Menu</Text>
            <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigation('Home')}>
                <Text style={styles.menuText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigation('Profile')}>
                <Text style={styles.menuText}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigation('My Profile')}>
                <Text style={styles.menuText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigation('Logout')}>
                <Text style={styles.menuText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    menuItem: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    menuText: {
        fontSize: 18,
    },
});

export default SideMenuScreen;
