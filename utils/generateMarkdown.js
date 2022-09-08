// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //Splits data.variables into variables
  const {title,description,installation,usage,contributing,test,username,email} = data;
 
  //These functions will create a section of the markdown depending on weather or not a specific parameter was included by user
  const generateDescription = () => {
    if (!description) {
      return "\n";
    }
    else
    {
      return description + "\n";
    }
  }

  const generateInstallation = () => {
    if (!installation) {
      return "";
    }
    else {
      return "\n" + `## Instalation
${installation}
`;
    }
  }
  const generateUsage = () => {
    if (!usage) {
      return "";
    }
    else {
      return "\n" + `## Usage
${usage}
`;
    }
  }
  const generateContributing = () => {
    if (!contributing) {
      return "";
    }
    else {
      return "\n" + `## Contributing
${contributing}
`;
    }
  }
  const generateTests = () => {
    if (!test) {
      return "";
    }
    else {
      return "\n" + `## Tests
${test}
`;
    }
  }
  const generateUsername = () => {
    if (!username) {
      return "";
    }
    else {
      return `
${username}
`;
    }
  }
  const generateEmail = () => {
    if (!email) {
      return "";
    }
    else {
      return `
${email}
`;
    }
  }  
  const generateQuestions = () => {
    if (!username && !email) {
      return "";
    }
    else {
      return "\n" + `## Questions?
contact me!${generateUsername()}${generateEmail()}`;
    }
  }

  console.log("<><><><><><><><><><><><><><><><>");

  return `# ${title}
${generateDescription()}${generateInstallation()}${generateUsage()}${generateContributing()}${generateTests()}${generateQuestions()}`;

}

module.exports = generateMarkdown;
