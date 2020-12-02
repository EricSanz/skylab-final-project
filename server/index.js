const express = require('express');
const debug = require('debug');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connect } = require('mongoose');
const Videogame = require('./src/models/videogameModel');
const videogameRouter = require('./src/routes/videogameRoutes')(Videogame);

const app = express();
const port = process.env.PORT || 1728;
const dbURL = process.env.dbURL || 'mongodb://localhost/videoGamesdb';

connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', videogameRouter);

app.listen(port, () => {
  debug(`Server is running on port ${chalk.blue(port)}`);
});
