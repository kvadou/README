// Dependencies & variables
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateReadme");
const writeFileAsync = util.promisify(fs.writeFile);

// User questions prompt
function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What is the project title?",
    },
    {},
  ]);
}
