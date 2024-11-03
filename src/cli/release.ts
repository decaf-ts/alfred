import { Command } from "commander";
import { validateMessage, validateVersion } from "../utils/validation";

const program = new Command();

program
  .name("Alfred Release Helper")
  .description(
    "CLI to make git releases including publishing docker images and npm packages"
  )
  .version("##VERSION##");

program
  .command("release")
  .description(
    "Makes a new release changing package version, pushing a tag to git, \
    building and publishing docker images and package registries"
  )
  .option(
    "-v, --tag <string>",
    "Release version number in the format v0.0.1(-alpha(.1)), or you can use patch|minor|major.",
    ""
  )
  .option("-m, --message <string>", "Message used for the commit", "")
  .option(
    "-d, --dry",
    "Signals a dry run that validates inputs for testing purposes",
    false
  )
  .action((args) => {
    const { tag, message, dry } = args;

    if (dry) return console.log(JSON.stringify({ tag, message, dry }));

    if (!validateVersion(tag)) throw new Error("Invalid Version");
    if (!validateMessage(message)) throw new Error("Message Cannot be empty");
  });

program.parse(process.argv);
