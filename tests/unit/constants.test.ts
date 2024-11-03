import { SEMANTIC_VERSIONING } from "../../src";
describe("Tests constants values", () => {
  it("Tests Semantic Versioning", () => {
    expect(SEMANTIC_VERSIONING.MAJOR).toEqual("major");
    expect(SEMANTIC_VERSIONING.MINOR).toEqual("minor");
    expect(SEMANTIC_VERSIONING.PATCH).toEqual("patch");
  });
});
