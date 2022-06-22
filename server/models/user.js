const { nanoid } = require("nanoid");

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "user",
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: function () {
          return nanoid();
        },
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
      },
      anggota1: {
        type: Sequelize.STRING,
      },
      anggota2: {
        type: Sequelize.STRING,
      },
      namatim: {
        type: Sequelize.STRING,
      },
      universitas: {
        type: Sequelize.STRING,
      },
      jurusan: {
        type: Sequelize.STRING,
      },
      category: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      role: {
        type: Sequelize.STRING,
        defaultValue: "subscriber",
      },
      sak: {
        type: Sequelize.STRING,
      },
      karyaBCC: {
        type: Sequelize.STRING,
      },
      karyaBCC2: {
        type: Sequelize.STRING,
      },
      karyaBPC: {
        type: Sequelize.STRING,
      },
      buktibayar: {
        type: Sequelize.STRING,
      },
      gambarktm: {
        type: Sequelize.STRING,
      },
      buktitwibbon: {
        type: Sequelize.STRING,
      },
      verifikasi: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      lolostahapdua: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      isSubmit: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return User;
};
// const mongoose = require("mongoose");

// const { ObjectId } = mongoose.Schema;

// const userSchema = new mongoose.Schema(
//   {
//     name: String,
//     anggota1: String,
//     anggota2: String,
//     namatim: String,
//     universitas: String,
//     jurusan: String,
//     category: {
//       type: String,
//       enum: ["bpc", "bcc"],
//     },
//     email: {
//       type: String,
//       required: true,
//       index: true,
//     },
//     role: {
//       type: String,
//       default: "subscriber",
//     },
//     sak: {},
//     karyaBCC: {},
//     karyaBCC2: {},
//     karyaBPC: {},
//     buktibayar: {},
//     gambarktm: {},
//     buktitwibbon: {},
//     verifikasi: {
//       type: Boolean,
//       default: false,
//     },
//     lolostahapdua: {
//       type: Boolean,
//       default: false,
//     },
//     isSubmit: {
//       type: Boolean,
//       default: false,
//     },
//     //   wishlist: [{ ObjectId, ref: "Product" }],
//   },
//   { timestamps: true }
// );
// // timestamps: true = autopopulate date/time of userSchema when saved to collections
// module.exports = mongoose.model("User", userSchema);
