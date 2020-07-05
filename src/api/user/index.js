require('express-async-errors');
const router = require('express').Router();

// const { admin, editor, auth } = require('../../middleware/auth');

const allUsers = require('./getAllUser');
const deleteUser = require('./deleteUser');
const getProfile = require('./getProfile');
const userRole = require('./userRole');
const moderatorRole = require('./moderatorRole');


router.get('/', allUsers);
router.delete('/:id', deleteUser);
router.get('/:id', getProfile);
router.post('/role-user/:id', userRole);
router.post('/role-moderator/:id', moderatorRole);

module.exports = router;
