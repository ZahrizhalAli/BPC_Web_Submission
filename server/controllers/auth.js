const { EmptyResultError } = require("sequelize/dist");
const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

exports.createOrUpdateUser = async (req, res) => {
  const { name, email } = req.user; // from authCheck middleware
  User.findOne({
    where: {
      email: email,
    },
  })
    .then((data) => { 
      if (data) {
        console.log("USER HAS BEEN UPDATED: ", data);
        res.json(data); //send response to front end via res.
      } else {
        const newUser = User.create({
          email: email,
          name: name,
        });

        console.log("USER HAS BEEN CREATED: ", newUser);
        res.json(newUser);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.currentUser = async (req, res) => {
  //req.user.email came from authCheck middleware.
  User.findOne({
    where: {
      email: req.user.email,
    },
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      throw new Error(err);
    });
};
