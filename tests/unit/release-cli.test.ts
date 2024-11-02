import { exec } from "child_process";

describe("Tests release CLI", () => {
  const baseCommand = "node ./lib/cli/release.cjs release -d ";
  test.each([
    [
      "Should pass provided the message and the version",
      "refs #1 - new commit",
      "patch",
      { tag: "patch", message: "refs #1 - new commit", dry: true },
    ],
  ])(
    "%s",
    async (
      testName: string,
      message: string,
      version: string,
      expected: { [x: string]: string | boolean }
    ) => {
      expect(testName).toBeDefined();
      expect(message).toBeDefined();
      expect(version).toBeDefined();
      const runCommand = new Promise((resolve, reject) => {
        const cmd = baseCommand + `-m '${message}' -v '${version}'`;
        exec(cmd, (err, stdout, stderr) => {
          if (err) reject(err);
          //{ version: 'patch', message: 'refs', dry: true }

          if (stderr) resolve(stderr);

          resolve(stdout);
        });
      });
      try {
        const result = await runCommand;

        const obj = JSON.parse(result as string);
        expect(obj).toBeDefined();

        Object.keys(obj).forEach((el) => {
          expect(obj[el]).toEqual(expected[el]);
        });
      } catch (e: unknown) {
        expect(e).toBeUndefined();
      }
    }
  );
});
