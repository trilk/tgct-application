const express = require('express')
const router = express.Router()

const verifyToken = require('../middleware/auth')
const controller = require("../controllers/user.controller");

// POST api/user/profile
router.post('/profile', verifyToken, controller.profile)

module.exports = router