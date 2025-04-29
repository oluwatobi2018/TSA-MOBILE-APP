// Utility functions for formatting data

/**
 * Formats a number as currency.
 * @param {number} amount - The amount to format.
 * @param {string} currency - The currency code (e.g., 'USD', 'EUR').
 * @param {string} locale - The locale code (e.g., 'en-US', 'fr-FR').
 * @returns {string} - The formatted currency string.
 */
export function formatCurrency(amount, currency = 'USD', locale = 'en-US') {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
    }).format(amount);
}

/**
 * Formats a date to a readable string.
 * @param {Date|string} date - The date to format.
 * @param {string} locale - The locale code (e.g., 'en-US', 'fr-FR').
 * @param {object} options - Additional formatting options for Intl.DateTimeFormat.
 * @returns {string} - The formatted date string.
 */
export function formatDate(date, locale = 'en-US', options = {}) {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat(locale, options).format(dateObj);
}

/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The string to capitalize.
 * @returns {string} - The capitalized string.
 */
export function capitalizeFirstLetter(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}
