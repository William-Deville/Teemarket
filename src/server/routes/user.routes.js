const router = require('express').Router();
const authController = require('../controllers/auth.controllers');
const userController = require('../controllers/user.controller');

//auth
router.post("/register", authController.signUp);

//user display
router.get('/', userController.getAllUsers);
router.get('/:id', userController.userInfo);
router.patch('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
//router.patch('/follow/:id', userController.follow)    //!!à préparer pour la wishlist
//router.patch('/unfollow/:id', userController.unfollow)    //!!à préparer pour la wishlist

module.exports = router;