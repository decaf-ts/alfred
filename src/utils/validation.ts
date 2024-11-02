import {
  NOT_EMPTY_STRING_VALIDATION_REGEX,
  VERSION_VALIDATION_REGEX,
} from "../constants/regex";

/**
 * @summary Validates version provided
 * @description version should respect the following structure v0.0.0(? "-reference")(? ".1")
 *
 * @param {string} [version] must be provided a version
 *
 * @function validateVersion
 * @memberOf module:alfred
 */

export function validateVersion(version: string) {
  return VERSION_VALIDATION_REGEX.test(version);
}

/**
 * @summary Validates message
 * @description Validates is message is not empty
 *
 * @param {string} [m] message provided
 *
 * @function validateMessage
 * @memberOf module:alfred
 */

export function validateMessage(m: string) {
  return NOT_EMPTY_STRING_VALIDATION_REGEX.test(m);
}
