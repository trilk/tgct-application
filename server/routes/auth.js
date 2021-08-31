const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/auth");
const controller = require("../controllers/auth.controller");

router.get("/", verifyToken, controller.authed);

// POST api/auth/register
router.post("/register", controller.register);

// POST api/auth/login
router.post("/login", controller.login);

module.exports = router;
