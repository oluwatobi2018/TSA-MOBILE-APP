// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MyProfileScreen from '../screens/MyProfileScreen';
import SocialScreen from '../screens/SocialScreen';
import LinksScreen from '../screens/LinksScreen';
import AddContactScreen from '../screens/AddContactScreen';
import ContactListScreen from '../screens/ContactListScreen';
import SideMenuSceen from '../screens/SideMenuScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="MyProfile" component={MyProfileScreen} />
                <Stack.Screen name="Social" component={SocialScreen} />
                <Stack.Screen name="Links" component={LinksScreen} />
                <Stack.Screen name="AddContact" component={AddContactScreen} />
                <Stack.Screen name="ContactList" component={ContactListScreen} />
                <Stack.Screen name="SideMenu" component={SideMenuScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
