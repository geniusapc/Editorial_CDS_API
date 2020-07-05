require('./startup/uncaughtErrors');
require('dotenv').config();
const app = require('express')();
const debug = require('debug')('app:startup');

const { PORT } = require('./config/keys');

require('./startup/requireKeys')();
require('./startup/startUpMiddlewares')(app);
require('./config/passport/passport-setup')(app);
require('./startup/api')(app);
app.use(require('./middleware/errorLogger'));
app.use(require('./middleware/errorHandler'));

app.listen(PORT, () => debug(`listening to port ${PORT}`));
