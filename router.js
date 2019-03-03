const express = require("express");
const router = express.Router();
const feedService = require("./feedService");
const hashtagService = require("./hashtagService");

router.use((req, res, next) => {
  console.log("called", req.path);
  next();
});

router.use(feedService);
router.use(hashtagService);

module.exports = router;
