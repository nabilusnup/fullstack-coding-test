const express = require("express");
const router = express.Router();
const user = require("./users");
const tree = require("./tree")


router.use("/", user);
router.use("/", tree)



module.exports = router;