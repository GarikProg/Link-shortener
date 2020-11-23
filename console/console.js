const readline = require('readline');
const fetch = require('node-fetch');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`Enter command: stats, create`, (answer) => {
  // TODO: Log the answer in a database
  switch(answer) {
    case 'stats': {
      fetch('http://localhost:3001/links').then(r => r.json()).then(r => console.table(r))  
    }
    default: console.log('no such command');
  } 

});
