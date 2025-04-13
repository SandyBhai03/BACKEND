const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/userController');

router.get('/users', userControllers.getAllUsers);
router.get('/users/:id', userControllers.getUserByID);
router.post('/user', userControllers.createUser);
router.put('/user/:id', userControllers.updateUser);
router.delete('/user/:id', userControllers.deleteUser);

module.exports = router;