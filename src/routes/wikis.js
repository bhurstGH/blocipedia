const express = require("express");
const router = express.Router();

const wikiController = require("../controllers/wikiController");

// router.get("", wikiController.public);
router.get("/wikis/new", wikiController.new);
router.get("/wikis/:id", wikiController.show);
router.get("/wikis/:id/edit", wikiController.edit);
router.post("/wikis/create", wikiController.create);
router.post("/wikis/:id/destroy", wikiController.destroy);
router.post("/wikis/:id/update", wikiController.update);
router.get("/wikis/:id/collaborators", wikiController.collaborators);
router.post("/wikis/:id/addcollab", wikiController.addCollab);
router.post("/wikis/:wikiId/removecollab/:id", wikiController.removeCollab);

module.exports = router;