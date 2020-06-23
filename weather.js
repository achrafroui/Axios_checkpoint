const http = require('http');
const axios = require('axios');


const port = 8000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  axios.all([
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Tunis&appid=51b5816629232843e79e0c6976b4b3f8'),
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Bizerte&appid=51b5816629232843e79e0c6976b4b3f8'),
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Sfax&appid=51b5816629232843e79e0c6976b4b3f8'),

  ])
  .then(response => {
   
    console.log('Tunis: ', response[0].data.weather);
    console.log('Bizerte: ', response[1].data.weather);
    console.log('Sfax: ', response[2].data.weather);
   
  });
});

server.listen(port,  () => {
  console.log(`Server running at port :${port}/`);
});