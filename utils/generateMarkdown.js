const {generateTableOfContents, generateDescription, generateInstallation, generateUsage, generateContributing, generateTests, generateQuestions} = require("./generateSections.js");
const licenseText = require("./licenseText");
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `
## License
${licenseText.MIT}
    `;
  }
  else if (license === "GNPU") {
    return `
## License
${licenseText.GNPU}
    `;
  }
  else{
    return "";
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  //Splits data.variables into variables
  const {title,description,installation,usage,contributing,test,license,username,email} = data;
 
  //Makes a table of contents
  const generateTableOfContents = () => {
    if (!installation && !usage && !contributing && !test && !username && !email) {
      return "";
    }
    let html = "";
    if (installation) {
      html += "[Installation](#installation)\n";
    }
    if (usage) {
      html += "[Usage](#usage)\n";
    }
    if (contributing) {
      html += "[Contributing](#contributing)\n";
    }
    if (test) {
      html += "[Tests](#tests)\n";
    }
    if (username || email) {
      html += "[Questions](#questions)\n";
    }
    if (license !== "none") {
      html += "[License](#license)\n";
    }
    return `
## Table of Contents
${html}`
  }

  //Other sections made from functions stored in the generate sections .js file
  return `# ${title}
${generateDescription(description)}${generateTableOfContents()}${generateInstallation(installation)}${generateUsage(usage)}${generateContributing(contributing)}${generateTests(test)}${generateQuestions(username,email)}${renderLicenseSection(license)}`;

}

module.exports = generateMarkdown;
