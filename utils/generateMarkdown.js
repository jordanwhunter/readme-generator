// GitHub formatting syntax for markdowns:
// https://docs.github.com/en/free-pro-team@latest/github/writing-on-github/basic-writing-and-formatting-syntax

// function to generate markdown for README
function generateMarkdown(userResponses, userInfo) {

  // Create title and description
  // Generate badges
  let draftMarkdown = 
  `# ${userResponses.title}
  (https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor)
  
  ## Description
  ${userResponses.description}`

  // Plug userReponses into table of contents
  let draftTable = `## Table of Contents`;

  if (userResponses.installation !== '') {
    draftTable += `* [Installation] (#installation)`
  };
  if (userResponses.usage !== '') {
    draftTable += `* [Usage] (#usage)`
  };
  // Add license section to markdown
  draftMarkdown += `* [License] (#License)`;
  if (userResponses.contributing !== '') {
    draftTable += `* [Contributing] (#contributing)`
  };
  if (userResponses.tests !== '') {
    draftTable += `* [Tests] (#tests)`
  };
  
  // Add table of contents data to markdown
  draftMarkdown += draftTable;
  
  // Create installation section
  if (userResponses.installation !== '') {
    draftMarkdown += 
    `## Installation 
    ${userResponses.installation}`
  };

  // Create usage section
  if (userResponses.usage !== ''){
    draftMarkdown +=
    `## Usage
    ${userResponses.usage}`
  };
  
  // Create contribution section
  if (userResponses.contributing !== ''){
    `## Contributing
    
    **Please follow guidelines if you choose to contribute.**
    ${userResponses.contributing}`
  };
  
  // Create tests section

  // Connect userResponses to license section

  // Questions section

  // Return markdown
};

// Export markdown module
module.exports = generateMarkdown;
