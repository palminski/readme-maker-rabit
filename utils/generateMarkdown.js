const {generateTableOfContents, generateDescription, generateInstallation, generateUsage, generateContributing, generateTests, generateQuestions} = require("./generateSections.js");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "none" || !license) {
    return "";
  }
  else
  {
    return `[![](https://img.shields.io/badge/licence-${license}-9cf)](${renderLicenseLink(license)})`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  }
  else if (license === "GNPU") {
    return "https://www.gnu.org/licenses/gpl-3.0.en.html";
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `
## License
This project uses the MIT licence. Please click on the badge above or [here](https://opensource.org/licenses/MIT) to view more information.
    `;
  }
  else if (license === "GNPU") {
    return `
## License
This project uses the GNPU licence. please click the badge above or [here](https://www.gnu.org/licenses/gpl-3.0.en.html) to view more information.
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
    if (!installation && !usage && !contributing && !test && !username && !email && !license) {
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
  return `# ${title} ${renderLicenseBadge(license)}
${generateDescription(description)}${generateTableOfContents()}${generateInstallation(installation)}${generateUsage(usage)}${generateContributing(contributing)}${generateTests(test)}${generateQuestions(username,email)}${renderLicenseSection(license)}`;

}

module.exports = generateMarkdown;
