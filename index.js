import venom from 'venom-bot';
import cron from 'node-cron';

venom
  .create({
    session: 'Matheo', //name of session
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  console.log('entra a ckient')
  cron.schedule('* * * * *', async() => {
    let enviar  = (`Bienvenido, el nombre de la ciudad salta`);
      console.log('entra')
      client
        .sendText('5491165693049@c.us', enviar)
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
  });
}