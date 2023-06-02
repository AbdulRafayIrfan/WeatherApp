/* eslint-disable */
/**
 * @param time
 * @returns {string}
 * Function for converting UTC string time stamp into 12-hour time format
 * And converting to user's timezone
 * Eg: '6:53 AM'
 */
function timeConvert(time) {
  const timeStr = time.slice(11);
  // Date variable to convert value
  const timeStr12hr = new Date(`1975-01-01T${timeStr}Z`)
    .toLocaleTimeString(
      'en-US',
      { hour12: true, hour: 'numeric' },
    );
  return timeStr12hr;
}

/**
 *
 * @param UNIX_time
 * @returns {string}
 * Function for converting UNIX (UTC) time stamp into 12-hour format time with
 * hours and minutes, eg: '6:53 AM', converted to user's timezone
 */
function unixConvertMins(UNIX_time) {
  const time12hr = new Date(UNIX_time * 1000)
    .toLocaleTimeString(
      'en-US',
      { hour12: true, hour: 'numeric', minute: 'numeric' },
    );
  return time12hr;
}

export { timeConvert, unixConvertMins };
