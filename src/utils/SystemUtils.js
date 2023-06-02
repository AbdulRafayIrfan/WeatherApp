/* eslint-disable */
/**
 * Checks if the user's device is an Apple device or not
 * Return a boolean value accordingly
 */
function isApple() {
  return navigator.vendor === 'Apple Computer, Inc.';
}

export { isApple };
