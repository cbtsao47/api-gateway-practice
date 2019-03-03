const express = require("express");
const router = express.Router();
const feedService = require("../routes/feedService");
const hashtagService = require("../routes/hashtagService");

router.use((req, res, next) => {
  console.log("called", req.path);
  next();
});

router.use(feedService);
router.use(hashtagService);

module.exports = router;
