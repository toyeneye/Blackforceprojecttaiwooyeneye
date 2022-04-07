const pool = require("../models/index");
const specsController = {};

specsController.getAllPosts = function (req, res, next) {
  // get all posts from database
  // Replace sahmie in Blackforcesahmie with your fullname - no spaces
  pool.query("SELECT * FROM BlackforceProjecttaiwooyeneye", (error, results) => {
    if (error) {
      throw error;
    }
    return res.render("specs", { specsPosts: results.rows });
  });
};

specsController.createAPost = function (req, res, next) {
  // req.body
  let manufacturer = req.body.manufacturer;
  let model = req.body.model;
  let color = req.body.color;
  let year = req.body.year;

  // Replace sahmie in Blackforcesahmie with your fullname - no spaces
  pool.query(
    `INSERT INTO BlackforceProjecttaiwooyeneye (MANUFACTURER, MODEL, COLOR, YEAR) VALUES ($1 , $2, $3, $4)`,
    [manufacturer, model, color, year],
    (error, results) => {
      console.log(results);
      if (error) {
        throw error;
      }
      return res.render("specs", { specsPost: [] });
    }
  );
};

specsController.deleteAPost = function (req, res, next) {
  // get resource id

  const id = req.params.id;

  // Replace sahmie in Blackforcesahmie with your fullname - no spaces
  pool.query(
    "DELETE FROM BlackforceProjecttaiwooyeneye WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.redirect("/specs");
    }
  );
};

specsController.editAPost = function (req, res, next) {
  const id = req.params.id;

  pool.query(
    "SELECT * FROM BlackforceProjecttaiwooyeneye WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.render("specsEdit", { specsPost: results.rows[0] });
    }
  );
};

specsController.updateAPost = function (req, res, next) {
  const id = req.params.id;

  let manufacturer = req.body.manufacturer;
  let model = req.body.model;
  let color = req.body.color;
  let year = req.body.year;

  pool.query(
    "UPDATE BlackforceProjecttaiwooyeneye SET manufacturer = $1, model = $2, color = $3, year =  $4 WHERE id = $5",
    [manufacturer, model, color, year, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.redirect("/specs");
    }
  );
};

module.exports = specsController;