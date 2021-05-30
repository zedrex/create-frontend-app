import path from "path";
import { promisify } from "util";
import fs from "fs";
import del from "del";

import ncp from "ncp";
import chalk from "chalk";
import execao from "execa-output";
import Listr from "listr";

const access = promisify(fs.access);
const copy = promisify(ncp);

const deleteFiles = async (options) => {
    try {
        await del("./client/public");
        await del("./client/src");
    } catch (err) {
        console.error(`Error while deleting.`);
    }
};

const copyTemplateFiles = async (options) => {
    return copy(options.templateDirectory, options.targetDirectory, {
        clobber: true,
    });
};

export const createProject = async (options) => {
    options = {
        ...options,
        targetDirectory: options.targetDirectory || process.cwd() + "\\client",
    };

    const currentFileUrl = import.meta.url;

    const templateDirectory = path.resolve(
        new URL(currentFileUrl).pathname,
        "../templates"
    );
    options.templateDirectory = templateDirectory;

    try {
        await access(templateDirectory, fs.constants.R_OK);
    } catch (error) {
        console.log(error);
        console.error("%s Invalid template name", chalk.red.bold("ERROR"));
        process.exit(1);
    }
    const tasks = new Listr([
        // cra from chakra-ui/typescript
        {
            title: "Creating react template",
            task: () =>
                execao("npx", [
                    "create-react-app",
                    "client",
                    "--template",
                    "@chakra-ui/typescript",
                ]),
        },
        // delete public and src folders
        {
            title: "Deleting predefined files",
            task: () => deleteFiles(),
        },
        {
            title: "Copying custom template",
            task: () => copyTemplateFiles(options),
        },
        {
            title: "Installing dependencies",
            task: () =>
                execao("npm", [
                    "install",
                    "--prefix",
                    "./client/node_modules",
                    "./client",
                ]),
        },
    ]);
    await tasks.run();
    console.log("%s Project Ready", chalk.green.bold("DONE"));
    console.log(
        "\n\nRun `cd client` and `npm run start` to test the bootstrap.\n"
    );
    return true;
};
