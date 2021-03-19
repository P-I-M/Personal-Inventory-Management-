const express = require('express');
const routes = require('./controllers/');
const exphbs = require('express-handlebars');
const path = require('path');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001;


const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
  secret: 'Super secret secret',
  cookie: {
    // Session will expire in 10 minutes
    expires: 10 * 60 * 1000
  },
  resave: true,
  rolling: true,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize
  })
};

const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', hbs.engine);
// turn on routes
app.use(routes);

// turn on connection to database and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Our app is running on port ${ PORT }`));
});