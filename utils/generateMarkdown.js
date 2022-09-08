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
  const generateDescription = (data) => {
    if (!data.description) {
      return "\n";
    }
    else
    {
      return data.description + "\n";
    }
  }

  const generateInstallation = (data) => {
    if (!data.installation) {
      return "";
    }
    else {
      return "\n" + `## Instalation
${data.installation}
`;
    }
  }
  const generateUsage = (data) => {
    if (!data.usage) {
      return "";
    }
    else {
      return "\n" + `## Usage
${data.usage}
`;
    }
  }
  const generateContributing = (data) => {
    if (!data.contributing) {
      return "";
    }
    else {
      return "\n" + `## Contributing
${data.contributing}
`;
    }
  }
  const generateTests = (data) => {
    if (!data.test) {
      return "";
    }
    else {
      return "\n" + `## Tests
${data.test}
`;
    }
  }

  console.log("this function is running");

  return `# ${data.title}
${generateDescription(data)}${generateInstallation(data)}${generateUsage(data)}${generateContributing(data)}${generateTests(data)}
we are begining with a simple test. 
`;

}

module.exports = generateMarkdown;
