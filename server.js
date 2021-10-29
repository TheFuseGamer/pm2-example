const express = require('express');

const app = express();

function delay(duration) {
  const startTime = Date.now();
  while(Date.now() - startTime < duration) {
    // Do nothing.
  }
}

app.get('/', (req, res) => {
  res.send(`Performance example on process ${process.pid}`);
});

app.get('/timer', (req, res) => {
  delay(5000);
  res.send(`Delay complete on process ${process.pid}`);
});

console.log('Running server.js...');
console.log('Worker process started.');
app.listen(3000);