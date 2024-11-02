/**
 * @summary regex used for version validation
 * @description regex used for version validation should respect v0.0.0(? "-reference")(? ".1")
 * @const VERSION_VALIDATION_REGEX
 * @memberOf module:alfred
 */
export const VERSION_VALIDATION_REGEX =
  /^(patch|minor|major|v\d+\.\d+\.\d+(-[a-zA-Z]+(\.\d+)?)?)$/;

/**
 * @summary regex used to validate messages
 * @description regex that verifies if message is not empty
 * @const NOT_EMPTY_STRING_VALIDATION_REGEX
 * @memberOf module:alfred
 */
export const NOT_EMPTY_STRING_VALIDATION_REGEX = /^(?!\s*$).+/;
