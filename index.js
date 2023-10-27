const inquirer = require('inquirer');
const fs = require('fs');

const profileInfo = ({displayName, job, title, phone, email, collegeDegree, wife, kids}) =>

`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>9 Mini</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
  </head>
  <body>
    <header><h1 style="text-align: center;">Profile Review</h1></header>   
        <div class="container col-12" id="search">
            <div class="row col-12">
                <div class="col-4" id="searchdiv">
                    <h2>Profile for </h2> ${displayName}
                </div>               
            </div>
            <div class="row col-12">
                <div class="col-12">
                    <h4>Job: </h4> ${job}
                    <h4>Title: </h4> ${title}
                    <h4>Phone: </h4>${phone}
                    <h4>Email: </h4> ${email}
                    <h4>College Degree: </h4> ${collegeDegree}
                    <h4>Spouse: </h4> ${wife}
                    <h4>Kids: </h4> ${kids}
                </div>               
            </div>
        </div>
  </body>
</html>
`;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'displayName',
            message: 'Profile Page For?'
        },
        {
            type: 'input',
            name: 'job',
            message: 'What job do you currently hold?'
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is your job title?'
        },
        {
            type: 'input',
            name: 'phone',
            message: 'What phone number can you be reached at?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'checkbox',
            name: 'collegeDegree',
            message: 'Do you have a college degree?',
            choices: ['yes', 'no']
        },
        {
            type: 'input',
            name: 'wife',
            message: 'Are you married?'
        },
        {
            type: 'checkbox',
            name: 'kids',
            message: 'Do you have any kids?',
            choices: ['0', '1', '2', '3', '4']
        }        
    ])
    .then((answers) => {
        const mdContent = profileInfo(answers);
    
        fs.writeFile('index.html', mdContent, (err) =>
          err ? console.log(err) : console.log('Successfully created profile page.html!')
        );
    });


