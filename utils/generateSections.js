

const generateDescription = (description) => {
    if (!description) {
        return "\n";
    }
    else {
        return description + "\n";
    }
}

const generateInstallation = (installation) => {
    if (!installation) {
        return "";
    }
    else {
        return "\n" + `## Installation
${installation}
`;
    }
}
const generateUsage = (usage) => {
    if (!usage) {
        return "";
    }
    else {
        return "\n" + `## Usage
${usage}
`;
    }
}
const generateContributing = (contributing) => {
    if (!contributing) {
        return "";
    }
    else {
        return "\n" + `## Contributing
${contributing}
`;
    }
}
const generateTests = (test) => {
    if (!test) {
        return "";
    }
    else {
        return "\n" + `## Tests
${test}
`;
    }
}
const generateUsername = (username) => {
    if (!username) {
        return "";
    }
    else {
        return `
my Github page can be viewed [here](https://github.com/${username})`;
    }
}
const generateEmail = (email) => {
    if (!email) {
        return "";
    }
    else {
        return `
I can be reached via email at: ${email}`;
    }
}
const generateQuestions = (username,email) => {
    if (!username && !email) {
        return "";
    }
    else {
        return "\n" + `## Questions?
contact me!${generateUsername(username)}${generateEmail(email)}`;
    }
}

module.exports = {
    generateDescription: generateDescription,
    generateInstallation: generateInstallation,
    generateUsage: generateUsage,
    generateContributing: generateContributing,
    generateTests: generateTests,
    generateQuestions: generateQuestions
}