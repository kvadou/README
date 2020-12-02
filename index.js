// Dependencies & variables
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateReadme");
const writeFileAsync = util.promisify(fs.writeFile);
