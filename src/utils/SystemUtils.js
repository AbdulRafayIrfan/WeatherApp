/**
 * Checks if the user's device is an Apple device or not
 * Return a boolean value accordingly
 */
function isApple() {
    if (navigator.vendor === "Apple Computer, Inc.") {
        return true;
    }
    return false;
}

export { isApple };
