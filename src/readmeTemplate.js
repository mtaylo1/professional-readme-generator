function readmeTemplate(data) {
    return `# ${data.title}
    ## License:
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
    ${data.contribution}
    ## Testing:
    ${data.test}
    ## Contact Information: 
    -Github: [${data.github}] (https://github.com/${data.github})
    -Email: [${data.email}] (https://github.com/${data.email})
    `};