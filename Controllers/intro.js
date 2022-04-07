const introController = {};

introController.getHome = function (req, res, next) {
  // simulate data model
  let pageName = "IntroPage";
  let user = "toyeneye";
  let time = new Date().toLocaleDateString();

  res.render("intro", { pageName: pageName, user: user, time: time });
};

module.exports = introController;
