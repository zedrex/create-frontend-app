import arg from "arg";
import { createProject } from "./main";

const parseArgumentsIntoOptions = (rawArgs) => {
    const args = arg(
        {
            "--yes": Boolean,
            "--install": Boolean,
            "-y": "--yes",
            "-i": "--install",
        },
        {
            argv: rawArgs.slice(2),
        }
    );
    return {
        skipPrompts: args["--yes"] || false,
        runInstall: args["install"] || false,
    };
};

export const cli = async (args) => {
    let options = parseArgumentsIntoOptions(args);
    await createProject(options);
};
