require('express-async-errors');
const router = require('express').Router();
const fileUpload = require('express-fileupload');

// const { admin, auth } = require('../../middleware/auth');

const galleries = require('./galleries');
const addgallerry = require('./addGallery');
const deleteGallery = require('./deleteGallery');

router.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
  })
);

router.get('/', galleries);
router.post('/', addgallerry);
router.delete('/:id', deleteGallery);

module.exports = router;
