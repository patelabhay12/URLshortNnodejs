const express = require('express');
const { generateNewShortURl, URLRedirect } = require("../controllers/url");
const router = express.Router();


router.post("/", generateNewShortURl);
router.get("/:shortId",URLRedirect);


module.exports = router; 