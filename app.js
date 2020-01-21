const inquirer = require("inquirer");
const generateHTML = require("./lib/generateHTML");
const write2File = require("./lib/write2File");
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const questions = require("./lib/questions")
const test = false;


const askGenEmpl = () => {
  if (test) console.log("entered: askGenEmpl", questions.general);
  return inquirer.prompt(questions.general);
};


const askIntEmpl = () => {
  if (test) console.log("entered: askIntEmpl", questions.intern);
  return inquirer.prompt(questions.intern);
};


const askEngEmpl = () => {
  if (test) console.log("entered: askEngEmpl", questions.engineer);
  return inquirer.prompt(questions.engineer);
};


const askManEmpl = () => {
  if (test) console.log("entered: askManEmpl", questions.manager);
  return inquirer.prompt(questions.manager);
};


const askAgain = () => {
  if (test) console.log("entered: askAgain", questions.again);
  return inquirer.prompt(questions.again);
};

async function init() {
  if (test) console.log("started init:");
  
  const engList = [];
  const intList = [];
  const manList = [];

  const teamList = [manList,engList,intList];
  
  let employee;

  
  try {
    let again = true;
    let id = 0;

    while (again) {
      
      const ansGenEmpl = await askGenEmpl();
    

      
      const email = `${ansGenEmpl.first_name[0]}${ansGenEmpl.last_name}@company.com`;
      const fullName = `${ansGenEmpl.last_name}, ${ansGenEmpl.first_name}`;

      
      id += 1;

      switch (ansGenEmpl.role) {
        case 'Intern':
          ansRoleEmpl = await askIntEmpl();
          employee = new Intern (fullName,id,email,ansRoleEmpl.school);
          intList.push(employee);
          break;
        case 'Engineer':
          ansRoleEmpl = await askEngEmpl();
          employee = new Engineer (fullName,id,email,ansRoleEmpl.github);
          engList.push(employee);
          break;
        case 'Manager':
          ansRoleEmpl = await askManEmpl();
          employee = new Manager (fullName,id,email,ansRoleEmpl.office);
          manList.push(employee);
          break;
      }

      if (test) console.log(employee);
      console.log(`Added new employee ${employee.getName()} to team!`);

      
      const askResult = await askAgain();
      again = askResult.again;
    }

    
    manList.sort(nameCompare);
    engList.sort(nameCompare);
    intList.sort(nameCompare);

    const file = generateHTML(teamList);

    

    const filename = "./index.html";
    write2File(filename,file);

  } catch (error) {
    console.log(`There was a problem ${error}`);
  }
}

function nameCompare(a, b) {
  
  const nameA = a.getName().toUpperCase();
  const nameB = b.getName().toUpperCase();

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
}

init();