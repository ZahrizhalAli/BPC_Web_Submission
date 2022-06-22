const admin = require("../firebase");
const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;
//make sure function uses async whenever we found await method inside of it
exports.authCheck = async (req, res, next) => {
  // console.log(req.headers); //confirm token
  try {
    //validate if token is valid from firebase
    const firebaseUser = await admin
      .auth()
      .verifyIdToken(req.headers.authtoken); //req from browser
    //send firebaseUser token to controllers createOrUpdateUser
    req.user = firebaseUser; //req.user is from firebase

    next();
  } catch (err) {
    //modify error message
    res.status(401).json({
      err: "Invalid or expired token",
    });
  }
};

exports.adminCheck = async (req, res, next) => {
  const { email } = req.user;

  const getAdmin = await User.findOne({
    where: {
      email,
    },
  });

  if (getAdmin.role != "admin") {
    res.status(403).json({
      body: "Unauthorized",
    });
  } else {
    next();
  }
};

exports.bp = async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
};
