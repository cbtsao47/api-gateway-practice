const express = require("express");
const router = express.Router();
const apiAdapter = require("./apiAdapter");

const BASE_URL = "http://localhost:8088";
const api = apiAdapter(BASE_URL);

router.get("/feeds", (req, res) => {
  //reroutes here, now this acts as a front end axios call to other APIs
  api.get(req.path).then(resp => {
    res.send(resp.data);
  });
  //   res.send(req.path + "called");
});
router.get("/feeds/:hashtag", (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data);
  });
  //   res.send(req.path + "called");
});

router.post("/feeds", (req, res) => {
  api.post(req.path, req.body).then(resp => {
    res.send(resp.data);
  });
  //   res.send(req.path + "called");
});

module.exports = router;
