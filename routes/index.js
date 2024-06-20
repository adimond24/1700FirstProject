const myController = require("../controllers");
const routes = require("express").Router();

routes.get("/", myController.awesomeFunction);

module.exports = routes;
//trying to copy what was above to get the tooele tech is awesome to display//
routes.get("/", myController.woohooNew);
module.exports = routes;