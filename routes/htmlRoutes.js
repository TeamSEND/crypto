var db = require("../models");
const keys = require("../config/key");
// var cmc = require("../modules/coinmarketcap.js")(keys.CMC);
var news = new require("../modules/news.js")(keys.NEWS);
console.log(keys)
var topTen = news.topArticles("bitcoin");
console.log(topTen)

module.exports = function (app) {
  // Load index page
<<<<<<< HEAD
  app.get("/", function(req, res) {
<<<<<<< HEAD
    res.render("index", { user: req.user });
=======
      var topTen = cmc.bestCryptos(keys.CMC);
      console.log(topTen)
      res.render("index", {
        topTen: topTen,
      })
      
>>>>>>> blah
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404", { user: req.user });
=======
  app.get("/", function (req, res) {

    var topTen = news.topArticles("bitcoin");
    console.log(topTen)
    res.render("index", {
      topTen: topTen,
    })

  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
>>>>>>> made changes to modules
  });
};
