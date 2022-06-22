const Sequelize = require("sequelize");
const db = require("../config/database.js");
const { nanoid } = require("nanoid");
module.exports = (sequelize, Sequelize) => {
  const Pengumuman = sequelize.define(
    "pengumumen",
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: function () {
          return nanoid();
        },
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      file: {
        type: Sequelize.STRING,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Pengumuman;
};

// const mongoose = require("mongoose");

// const { ObjectId } = mongoose.Schema;

// const pengumumanSchema = new mongoose.Schema(
//   {
//     title: String,
//     description: {
//       type: String,
//       maxlength: 1000,
//       text: true,
//     },
//     file: {},
//   },
//   { timestamps: true }
// );
// // timestamps: true = autopopulate date/time of userSchema when saved to collections
// module.exports = mongoose.model("Pengumuman", pengumumanSchema);
