import * as path from "path";

describe("Replicate bug to fix", () => {
  function countOcurrences(list: string[], item: string) {
    return list.reduce((accum: string[], curr: string) => {
      if (curr == item) accum.push(item);
      return accum;
    }, []);
  }

  const name = "alfred";

  test.each([
    [
      ["require('", "./utils", "')"],
      "/home/vnogueira/workspaces/projects/alfred/alfred/index.cjs",
      "/home/vnogueira/workspaces/projects/alfred/alfred/src/utils.ts",
      false,
      "require('./utils/index.cjs')",
    ],
    [
      ["require('", "./utils", "')"],
      "/home/vnogueira/workspaces/projects/alfred/index.cjs",
      "/home/vnogueira/workspaces/projects/alfred/src/utils.ts",
      false,
      "require('./utils/index.cjs')",
    ],
    [
      ["require('", "./constants", "')"],
      "/home/vnogueira/workspaces/projects/alfred/alfred/index.cjs",
      "/home/vnogueira/workspaces/projects/alfred/alfred/src/constants.ts",
      false,
      "require('./constants/index.cjs')",
    ],
    [
      ["require('", "../utils/validation", "')"],
      "/home/vnogueira/workspaces/projects/alfred/alfred/cli/release.cjs",
      "/home/vnogueira/workspaces/projects/alfred/alfred/src/utils/validation.ts",
      true,
      "require('../utils/validation.cjs')",
    ],
    [
      ["require('", "./regex", "')"],
      "/home/vnogueira/workspaces/projects/alfred/alfred/constants/index.cjs",
      "/home/vnogueira/workspaces/projects/alfred/alfred/src/constants/regex.ts",
      true,
      "require('./regex.cjs')",
    ],
    [
      ["require('", "./SemanticVersioning", "')"],
      "/home/vnogueira/workspaces/projects/alfred/alfred/constants/index.cjs",
      "/home/vnogueira/workspaces/projects/alfred/alfred/src/constants/SemanticVersioning.ts",
      true,
      "require('./SemanticVersioning.cjs')",
    ],
    [
      ["require('", "./validation", "')"],
      "/home/vnogueira/workspaces/projects/alfred/alfred/utils/index.cjs",
      "/home/vnogueira/workspaces/projects/alfred/alfred/src/utils/validation.ts",
      true,
      "require('./validation.cjs')",
    ],
    [
      ["require('", "../constants/regex", "')"],
      "/home/vnogueira/workspaces/projects/alfred/alfred/utils/validation.cjs",
      "/home/vnogueira/workspaces/projects/alfred/alfred/src/constants/regex.ts",
      true,
      "require('../constants/regex.cjs')",
    ],

    [
      ["require('", "./constants", "')"],
      "/home/vnogueira/workspaces/projects/alfred/index.cjs",
      "/home/vnogueira/workspaces/projects/alfred/src/constants.ts",
      false,
      "require('./constants/index.cjs')",
    ],
    [
      ["require('", "../utils/validation", "')"],
      "/home/vnogueira/workspaces/projects/alfred/cli/release.cjs",
      "/home/vnogueira/workspaces/projects/alfred/src/utils/validation.ts",
      true,
      "require('../utils/validation.cjs')",
    ],
    [
      ["require('", "./regex", "')"],
      "/home/vnogueira/workspaces/projects/alfred/constants/index.cjs",
      "/home/vnogueira/workspaces/projects/alfred/src/constants/regex.ts",
      true,
      "require('./regex.cjs')",
    ],
    [
      ["require('", "./SemanticVersioning", "')"],
      "/home/vnogueira/workspaces/projects/alfred/constants/index.cjs",
      "/home/vnogueira/workspaces/projects/alfred/src/constants/SemanticVersioning.ts",
      true,
      "require('./SemanticVersioning.cjs')",
    ],
    [
      ["require('", "./validation", "')"],
      "/home/vnogueira/workspaces/projects/alfred/utils/index.cjs",
      "/home/vnogueira/workspaces/projects/alfred/src/utils/validation.ts",
      true,
      "require('./validation.cjs')",
    ],
    [
      ["require('", "../constants/regex", "')"],
      "/home/vnogueira/workspaces/projects/alfred/utils/validation.cjs",
      "/home/vnogueira/workspaces/projects/alfred/src/constants/regex.ts",
      true,
      "require('../constants/regex.cjs')",
    ],
  ])(
    "match: %s filename: %s",
    (
      groups: string[],
      filepath: string,
      expectedPath: string,
      isFile: boolean,
      expectedResult: string
    ) => {
      let result: string = "";
      const renamedFile = groups[1] + ".cjs";
      const fileName = groups[1] + ".ts";

      const repeatedNameOcurrences = countOcurrences(filepath.split("/"), name);

      const pathend = filepath
        .split(name)
        [filepath.split(name).length - 1].split("/")
        .slice(
          1,
          filepath.split(name)[filepath.split(name).length - 1].split("/")
            .length - 1
        )
        .join("/");

      const filePath = path.join(
        filepath.split(name)[0],
        repeatedNameOcurrences.join("/"),
        "src",
        pathend,
        fileName
      );
      if (!isFile) result = groups[0] + groups[1] + "/index.cjs" + groups[2];

      if (isFile) result = groups[0] + renamedFile + groups[2];

      expect(filePath).toEqual(expectedPath);
      expect(result).toEqual(expectedResult);
    }
  );
});
