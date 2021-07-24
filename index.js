'use strict';

const readLineSync = require('readline-sync');
const chalk =require('chalk');

const userName = readLineSync.question(chalk.bold("Enter your name to start the game \n->"));


function display()
{
  console.clear();
  console.log(`
█░░ █▀▀ ▀█▀ ▀ █▀   █▀█ █░░ ▄▀█ █▄█   █
█▄▄ ██▄ ░█░ ░ ▄█   █▀▀ █▄▄ █▀█ ░█░   ▄
  `);

  console.log(chalk.bold.cyanBright(`Only A True Friend Can Pass This Test`));
  console.log('---------------------------------------------------\n')

  console.log(chalk.gray.bold(`All the best ${userName}! \n`))
}

display();

let score = 0;

function quiz(question, currentAnswer, reason)
{
  let userAnswer = readLineSync.question(question +"\n->");
  if(userAnswer === currentAnswer)
  {
    score++;
    console.log(`\n✔️  ${chalk.gray.bold(reason)}`);
  }
  else
  {
    console.log(`\n❌  ${chalk.gray.bold(reason)}`);
  }
  console.log(`Your score -> ${score}`);
  console.log("----------------\n");
}



let questions = [
  {
    question:"Kush plays? (football | badminton | cricket)",
    answer:"football",
    reason:"He is good in football and he won many inter house football tournments"
  },
  {
    question:"Kush want to become? (dancer | data scientist | web developer)",
    answer:"web developer" ,
    reason:"He wont to become a web developer. He have participated in many events like 'Pegasus'."
  },
  {
    question:"Kush lives in? (lucknow | delhi | banglore)",
    answer:"lucknow",
    reason:"He was born in Lucknow and he loves 'kebab'."
  },
  {
    question:"kush loves? (fast songs | rap | old songs)",
    answer:"old songs",
    reason:"He loves to listen old songs."
  }
];

for(let i=0; i<questions.length; i++)
{
  let askQuestion = questions[i].question;
  let correctAnswer = questions[i].answer;
  let reason = questions[i].reason;

  quiz(askQuestion, correctAnswer, reason)
}

console.log(chalk.bold.green(`${userName} you scored ${score}/${questions.length}`));