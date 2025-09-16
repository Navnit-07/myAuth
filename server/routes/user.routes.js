const express = require("express");

const { getUserData } = require('../controllers/user.controller')
const { userAuth } = require("../middlewares/userAuth.middleware");
const userRouter = express.Router();

// make this post to get (Error : can not set undefined while doning req.body.userId in auth middleware bec in get we donot have any body)
userRouter.post('/data', userAuth, getUserData);
exports.userRouter = userRouter;