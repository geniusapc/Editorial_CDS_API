require('express-async-errors');
const router = require('express').Router();
const fileUpload = require('express-fileupload');

// const { admin, auth } = require('../../middleware/auth');

const getEvents = require('./getEvents');
const getEvent = require('./getEvent');
const postEvent = require('./postEvent');
const getBySlug = require('./getBySlug');
const deleteEvent = require('./deleteEvent');
const editEvent = require('./deleteEvent');
const postComment = require('./postComment');

router.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
  })
);

router.get('/', getEvents);
router.get('/search/:title', getEvent);
router.post('/', postEvent);
router.get('/:slugTitle', getBySlug);
router.delete('/:id', deleteEvent);
router.put('/:id', editEvent);
router.post('/comment/:eventId', postComment);

module.exports = router;
