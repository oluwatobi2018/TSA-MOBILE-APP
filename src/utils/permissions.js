import { PermissionsAndroid, Platform } from 'react-native';

/**
 * Request a specific permission on Android.
 * @param {string} permission - The permission to request.
 * @returns {Promise<boolean>} - Returns true if permission is granted, false otherwise.
 */
export const requestPermission = async (permission) => {
    if (Platform.OS !== 'android') {
        return true; // Permissions are automatically granted on iOS
    }

    try {
        const granted = await PermissionsAndroid.request(permission);
        return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (error) {
        console.error('Permission request error:', error);
        return false;
    }
};

/**
 * Check if a specific permission is granted.
 * @param {string} permission - The permission to check.
 * @returns {Promise<boolean>} - Returns true if permission is granted, false otherwise.
 */
export const checkPermission = async (permission) => {
    if (Platform.OS !== 'android') {
        return true; // Permissions are automatically granted on iOS
    }

    try {
        const granted = await PermissionsAndroid.check(permission);
        return granted;
    } catch (error) {
        console.error('Permission check error:', error);
        return false;
    }
};

/**
 * Request multiple permissions on Android.
 * @param {string[]} permissions - Array of permissions to request.
 * @returns {Promise<boolean>} - Returns true if all permissions are granted, false otherwise.
 */
export const requestMultiplePermissions = async (permissions) => {
    if (Platform.OS !== 'android') {
        return true; // Permissions are automatically granted on iOS
    }

    try {
        const grantedPermissions = await PermissionsAndroid.requestMultiple(permissions);
        return Object.values(grantedPermissions).every(
            (result) => result === PermissionsAndroid.RESULTS.GRANTED
        );
    } catch (error) {
        console.error('Multiple permissions request error:', error);
        return false;
    }
};
