// generateReadme function that will populate the README.md
function generateReadme(answers) {
  return `
<h1 align="center">${answers.projectTitle} 👋</h1>

![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />

## Description
🔍 ${answers.description}



    `;
}
