// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  //Splits data.variables into variables
  const {title,description,installation,usage,contributing,test,licence,username,email} = data;
 
  //These functions will create a section of the markdown depending on weather or not a specific parameter was included by user
  const generateTableOfContents = () => {
    if (!installation && !usage && !contributing && !test && !username && !email) {
      return "";
    }
    let html = "";
    if (installation){
      html += "[Installation](#installation)\n";
    }
    if (usage){
      html += "[Usage](#usage)\n";
    }
    if (contributing){
      html += "[Contributing](#contributing)\n";
    }
    if (test){
      html += "[Tests](#tests)\n";
    }
    if (username || email){
      html += "[Questions](#questions)\n";
    }
    return `
## Table of Contents
${html}`
  }

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
my Github page can be viewed [here](https://github.com/${username})`;
    }
  }
  const generateEmail = () => {
    if (!email) {
      return "";
    }
    else {
      return `
I can be reached via email at: ${email}`;
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



  return `# ${title}
${generateDescription()}${generateTableOfContents()}${generateInstallation()}${generateUsage()}${generateContributing()}${generateTests()}${generateQuestions()}`;

}

module.exports = generateMarkdown;
