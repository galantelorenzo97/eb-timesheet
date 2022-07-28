const express = require('express');
const usersController = require('./controllers/users');

const app = express();
const port = 3005;

app.use(
    express.urlencoded({
      extended: true,
    })
  );
  
  app.use(express.json());
  
app
    .get('/', (req, res) => {res.send("This is a test")})
    .use('/users', usersController)

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));