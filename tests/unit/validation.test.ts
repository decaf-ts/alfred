import { validateMessage, validateVersion } from "../../src";

describe("Version Validation", () => {
  describe("Using direct file import", () => {
    test.each([
      ["patch", true],
      ["minor", true],
      ["major", true],
      ["v1.2.3", true],
      ["v1.2.3-alpha", true],
      ["v1.2.3-beta", true],
      ["v1.2.3-development", true],
      ["v1.2.3-alpha.1", true],
      ["v1.2.3-beta.2", true],
      ["v1.2.3-development.3", true],

      ["v", false],
      ["v1", false],
      ["v1.2", false],
      ["v1.2.3asdsa", false],
      ["v1.2.3-123", false],
      ["v1.2.3-asd123", false],
      ["v1.2.3-alpha.asdas", false],
      ["v1.2.3-beta.", false],
    ])("for input %s return %s", (input, expected) => {
      expect(validateVersion(input)).toBe(expected);
    });
  });
});

describe("Message Validation", () => {
  describe("Using direct file import", () => {
    test.each([
      ["refs #1 - updated", true],
      ["made a new feature", true],
      ["major", true],
      ["v1.2.3", true],
      ["v1.2.3-alpha", true],
      ["v1.2.3-beta", true],
      ["v1.2.3-development", true],
      ["v1.2.3-alpha.1", true],
      ["v1.2.3-beta.2", true],
      ["v1.2.3-development.3", true],

      ["", false],
    ])("for input %s return %s", (input, expected) => {
      expect(validateMessage(input)).toBe(expected);
    });
  });
});
