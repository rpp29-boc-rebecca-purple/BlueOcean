const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT =4000;

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`)
});

