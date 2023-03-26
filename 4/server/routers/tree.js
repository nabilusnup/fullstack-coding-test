const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controllerTree")
const { authetication } = require("../middlewares/authetication");

router.get("/tree", Controller.showAll);
router.post("/add", authetication, Controller.addTree);
router.get("/tree/:id", Controller.detailById);

module.exports = router;