const fetch = require('node-fetch');
const moment = require('moment');
const chalk = require('chalk');
const rs = require('readline-sync');
const delay = require('delay');
const chalkRainbow = require('chalk-rainbow') //jangandihapus

const GoStumble = (auth) => new Promise((resolve, reject) => {

  fetch('http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/3', {
    method: 'GET',
    headers: {
      'authorization': auth
    }
  })
    .then(res => res.text())
    .then(data => {
      resolve(data);
    })
    .catch(err => {
      reject(err);
    });

});

(async () => {

  console.log(chalk.greenBright(chalk.bold`
██╗ ██████╗  █████╗ ███╗   ██╗██╗
██║██╔════╝ ██╔══██╗████╗  ██║██║
██║██║  ███╗███████║██╔██╗ ██║██║
██║██║   ██║██╔══██║██║╚██╗██║██║
██║╚██████╔╝██║  ██║██║ ╚████║██║
╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝
1. ${chalk.greenBright('Push Crown`)}
2. ${chalk.greenBright('Push Trophy')}
3. ${chalk.greenBright('Push Trophy')}
`)));

 const feature = rs.question('[+] Enter feature needed : ');

 if (feature == '1') {

  const auth = rs.question(chalk.greenBright('Enter Auth Keys : '));
  const time = rs.question(chalk.greenBright('Enter Delay In Milisecond : '));
  console.log('');

  while (true) {

    var code = '3';
    const result = await GoStumble(auth);
    if (!result) {

      console.log(chalk.redBright(`Auth Sudah Expired`));

    } else if (result.includes('User')) {

      const data = JSON.parse(result);
      const username = data.User.Username;
      const country = data.User.Country;
      const trophy = data.User.SkillRating;
      const crown = data.User.Crowns;

      console.log(chalk.greenBright(`\r
♨  [${moment().format('HH:mm:ss')}]  ♨
~  ${(`Country : ${country}`)}
~  ${(`Username : ${username}`)}  
~  ${(`Crown : ${crown}`)}  
~  ${(`Trophy : ${trophy}`)}
~  ${(`Status : ✓ Success`)}`));
      await delay(time)

    } else if (result == 'BANNED') {

        console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Banned !`));
        break;
                
     } else if (result == 'SERVER_ERROR' || result.includes('User path limit exceeded')) {

         continue;
                
      }
  }

} else if (feature == '2') {

  const auth = rs.question(chalk.greenBright('Enter Auth Keys : '));
  const time = rs.question(chalk.greenBright('Enter Delay In Milisecond : '));
  console.log('');

  while (true) {

    var code = '2';
    const result = await GoStumble(auth);
    if (!result) {

      console.log(chalk.redBright(`Auth Sudah Expired`));

    } else if (result.includes('User')) {

      const data = JSON.parse(result);
      const username = data.User.Username;
      const country = data.User.Country;
      const trophy = data.User.SkillRating;

      console.log(chalk.greenBright(`\r
♨  [${moment().format('HH:mm:ss')}]  ♨
~  ${(`Country : ${country}`)}
~  ${(`Username : ${username}`)}
~  ${(`Trophy : ${trophy}`)}
~  ${(`Status : ✓ Success`)}`));
      await delay(time)

    } else if (result == 'BANNED') {

        console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Banned !`));
        break;
                
     } else if (result == 'SERVER_ERROR' || result.includes('User path limit exceeded')) {

         continue;
                
      }
  }

} else if (feature == '3') {

  const auth = rs.question(chalk.greenBright('Enter Auth Keys : '));
  const time = rs.question(chalk.greenBright('Enter Delay In Milisecond : '));
  console.log('');

  while (true) {

    var code = '1';
    const result = await GoStumble(auth);
    if (!result) {

      console.log(chalk.redBright(`Auth Sudah Expired`));

    } else if (result.includes('User')) {

      const data = JSON.parse(result);
      const username = data.User.Username;
      const country = data.User.Country;
      const trophy = data.User.SkillRating;

      console.log(chalk.greenBright(`\r
♨  [${moment().format('HH:mm:ss')}]  ♨
~  ${(`Country : ${country}`)}
~  ${(`Username : ${username}`)}
~  ${(`Trophy : ${trophy}`)}
~  ${(`Status : ✓ Success`)}`));
      await delay(time)

    } else if (result == 'BANNED') {

        console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Banned !`));
        break;
                
     } else if (result == 'SERVER_ERROR' || result.includes('User path limit exceeded')) {

         continue;
                
      }
  }

})();
