// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let badge = '';
    if(license === 'MIT') {
        badge = '![GitHub license](https://img.shields.io/badge/License-MIT-yellow.svg)'
    } else if (license === 'Apache 2.0') {
        badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
    } else if (license === 'GPL v3.0') {
        badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
    } else {
      badge = ""
    }
    return badge;
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let licenseLink = '';
      if(license === 'MIT') {
        licenseLink = 'https://choosealicense.com/licenses/mit/'
      } else if (license === 'Apache 2.0') {
        licenseLink = 'http://www.apache.org/licenses/LICENSE-2.0'
      } else if (license === 'GPL v3.0') {
        licenseLink = 'https://www.gnu.org/licenses'
      } else {
        licenseLink = ""
      }
      return licenseLink;
  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if(license === 'None') {
    licenseSection = ''
  } else {
    licenseSection =
    `License: ${license} `
  }
  return licenseSection;
}
function runFile(data) {
    
    return `# ${data.title}
    ## License:
    ## ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
    ### ${renderLicenseLink(data.license)}
    [![license] ${data.license}]
    ## Table of contents:
    -[Description](#description)
    -[Installation](#installation)
    -[Usage](#usage)
    -[Contribution](#contribution)
    -[Testing](#testing)
    -[Additional Info](#addtional-info)

    ## Description:
    ${data.description}
    ## Installation:
    ${data.installation}
    ## Usage:
    ${data.usage}
    ## License:
    ${data.license}
    ## Contribution:
    ${data.contribute}
    ## Testing:
    ${data.test}
    ## Contact Information: 
    -Github: [${data.github}] (https://github.com/${data.github})
    -Email: [${data.email}] (${data.email})
    `};

    module.exports = runFile;