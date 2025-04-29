// validators.js

/**
 * Validates if a given value is an email.
 * @param {string} email - The email to validate.
 * @returns {boolean} True if valid email, otherwise false.
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validates if a given value is a strong password.
 * A strong password contains at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.
 * @param {string} password - The password to validate.
 * @returns {boolean} True if strong password, otherwise false.
 */
function isStrongPassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

/**
 * Validates if a given value is a phone number.
 * Accepts phone numbers in the format: +1234567890 or 1234567890.
 * @param {string} phoneNumber - The phone number to validate.
 * @returns {boolean} True if valid phone number, otherwise false.
 */
function isValidPhoneNumber(phoneNumber) {
    const phoneRegex = /^\+?\d{10,15}$/;
    return phoneRegex.test(phoneNumber);
}

module.exports = {
    isValidEmail,
    isStrongPassword,
    isValidPhoneNumber
};
