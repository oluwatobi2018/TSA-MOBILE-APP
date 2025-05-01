
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SideMenuScreen = ({ navigation }) => {
    const handleNavigation = (screen) => {
        navigation.navigate(screen);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Menu</Text>
            <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigation('ContactKeeper')}>
                <Text style={styles.menuText}>ContactKeeper</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigation('Contact')}>
                <Text style={styles.menuText}>Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigation('Profile')}>
                <Text style={styles.menuText}>Profile</Text>
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
        backgroundColor: '#000000',
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
        borderBottomColor: '#000000',
    },
    menuText: {
        fontSize: 18,
    },
});

export default SideMenuScreen;

