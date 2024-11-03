import {
  SEMANTIC_VERSIONING,
  VERSION_VALIDATION_REGEX,
  NOT_EMPTY_STRING_VALIDATION_REGEX,
} from "../../src/constants";
import { VERSION } from "../../src";
describe("Tests constants values", () => {
  it("Ensures Semantic Versioning values", () => {
    expect(SEMANTIC_VERSIONING.MAJOR).toEqual("major");
    expect(SEMANTIC_VERSIONING.MINOR).toEqual("minor");
    expect(SEMANTIC_VERSIONING.PATCH).toEqual("patch");
  });

  it("Ensures regex values", () => {
    expect(VERSION_VALIDATION_REGEX).toEqual(
      /^(patch|minor|major|v\d+\.\d+\.\d+(-[a-zA-Z]+(\.\d+)?)?)$/
    );
    expect(NOT_EMPTY_STRING_VALIDATION_REGEX).toEqual(/^(?!\s*$).+/);
  });

  it("Ensures VERSION const value", () => {
    expect(VERSION_VALIDATION_REGEX).toEqual(
      /^(patch|minor|major|v\d+\.\d+\.\d+(-[a-zA-Z]+(\.\d+)?)?)$/
    );
    expect(VERSION).toEqual("##VERSION##");
  });
});
