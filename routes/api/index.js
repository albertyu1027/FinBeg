const router = require("express").Router();
const finDataRoutes = require("./finData");

router.use("/finData", finDataRoutes);
module.exports = router;