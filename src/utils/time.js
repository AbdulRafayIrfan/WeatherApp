/**
 * @param time
 * @returns {string}
 * Function for converting string time stamp into 12-hour time format
 * Eg: '6:53 AM'
 */
function timeConvert(time) {
    const timeStr = time.slice(11)
    // Date variable to convert value
    const timeStr12hr = new Date('1975-01-01T' + timeStr + 'Z')
        .toLocaleTimeString('en-US',
            {timeZone: 'UTC', hour12: true, hour: 'numeric'}
        );
    return timeStr12hr;
}

/**
 *
 * @param UNIX_time
 * @returns {string}
 * Function for converting UNIX time stamp into 12-hour format time with
 * hours and minutes, eg: '6:53 AM'
 */
function unixConvertMins(UNIX_time) {
    let time12hr = new Date(UNIX_time * 1000)
        .toLocaleTimeString('en-US',
            {hour12: true, hour: 'numeric', minute: 'numeric'}
        );
    return time12hr;
}

export { timeConvert, unixConvertMins }