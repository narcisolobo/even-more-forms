/**
 * The function checks if a given string is at least a certain length and returns an error message if
 * it is not.
 * @param {string} name The name of the input being checked
 * @param {string} str The string that needs to be checked for length.
 * @param {number} length The minimum length that the string should have.
 * @returns {string} A string that either states that the input `name`
 * must be at least `length` characters long or an empty string if the
 * input `str` is at least `length` characters long.
 */
function checkLength(name = '', str = '', length = 1) {
  if (str.trim().length < length) {
    return `${name} must be at least ${length} characters.`;
  } else {
    return '';
  }
}

/**
 * The function checks if a given string is a valid email address.
 * @param {string} str The string representing an email address that needs to be validated.
 * @returns {string} If the input string does not contain '@' or is empty after trimming,
 * the function will return the string 'Please enter a valid email.'.
 * Otherwise, it will return an empty string.
 */
function checkEmail(str = '') {
  if (!str.includes('@') || str.trim().length === 0) {
    return 'Please enter a valid email.';
  } else {
    return '';
  }
}

/**
 * The function checks if two password inputs match and returns an error message if they don't.
 * @param {string} password The user's chosen password.
 * @param {string} confirmPassword The user's input for confirming their password.
 * @returns {string} If the `password` and `confirmPassword` parameters are not equal,
 * the function will return the string `'Passwords must match.'`. Otherwise, it will
 * return an empty string.
 */
function checkPasswords(password = '', confirmPassword = '') {
  if (password !== confirmPassword) {
    return 'Passwords must match.';
  } else {
    return '';
  }
}

export { checkLength, checkEmail, checkPasswords };
