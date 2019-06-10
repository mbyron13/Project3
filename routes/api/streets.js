const router = require("express").Router();
const streetsController = require("../../controllers/streetsController");


router.route("/")
  .get(streetsController.findAll);

  router.route("/")
  .post(streetsController.create);


router
  .route("/:id")
  .get(streetsController.findById);

module.exports = router;
