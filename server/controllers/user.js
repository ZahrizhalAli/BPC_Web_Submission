const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

exports.getUser = async (req, res) => {
  //req.user.email came from authCheck middleware.
  User.findOne({ where: { id: req.params.userid } })
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      throw new Error(err);
    });
};

exports.getAllUser = async (req, res) => {
  //req.user.email came from authCheck middleware.
  User.findAll({
    where: {
      role: "subscriber",
      category: req.params.lomba,
    },
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.updateUser = async (req, res) => {
  const { email } = req.user; // from authCheck middleware
  console.log(req.body);
  try {
    const updated = await User.update(
      {
        name: req.body.name,
        anggota1: req.body.anggota1,
        anggota2: req.body.anggota2.length <= 0 ? null : req.body.anggota2,
        namatim: req.body.namatim,
        universitas: req.body.universitas,
        jurusan: req.body.jurusan,
        category: req.body.category,
        gambarktm: req.body.gambarktm,
        buktibayar: req.body.buktibayar,
        sak: req.body.sak,
        buktitwibbon: req.body.twibbon,
        isSubmit: true,
      },
      {
        where: {
          email: email,
        },
      }
    );
    res.json(updated);
  } catch (err) {
    console.log(err);
    res.status(400).send("Profile update failed");
  }
};

exports.updateUserBCC = async (req, res) => {
  const { email } = req.user; // from authCheck middleware
  console.log(req.body);
  try {
    const updated = await User.update(
      {
        karyaBCC: req.body.karyabcc,
      },
      { where: { email: email } }
    );
    res.json(updated);
  } catch (err) {
    console.log(err);
    res.status(400).send("Profile update failed");
  }
};

exports.updateUserBCC2 = async (req, res) => {
  const { email } = req.user; // from authCheck middleware
  console.log(req.body);
  try {
    const updated = await User.update(
      {
        karyaBCC2: req.body.karyabcc2,
      },
      {
        where: {
          email: email,
        },
      }
    );
    res.json(updated);
  } catch (err) {
    console.log(err);
    res.status(400).send("Profile update failed");
  }
};

exports.updateUserBPC = async (req, res) => {
  const { email } = req.user; // from authCheck middleware
  console.log(req.body);
  try {
    const updated = await User.update(
      {
        karyaBPC: req.body.karyabpc,
      },
      {
        where: {
          email: email,
        },
      }
    );
    res.json(updated);
  } catch (err) {
    console.log(err);
    res.status(400).send("Profile update failed");
  }
};

exports.updateVerifikasi = async (req, res) => {
  const { email } = req.user; // from authCheck middleware
  console.log(req.body);
  try {
    const updated = await User.update(
      {
        verifikasi: true,
      },
      { where: { id: req.body.userid } }
    );
    res.json(updated);
  } catch (err) {
    console.log(err);
    res.status(400).send("Profile update failed");
  }
};

exports.updateBatalVerifikasi = async (req, res) => {
  const { email } = req.user; // from authCheck middleware
  console.log(req.body);
  try {
    const updated = await User.update(
      {
        verifikasi: false,
      },
      { where: { id: req.body.userid } }
    );
    res.json(updated);
  } catch (err) {
    console.log(err);
    res.status(400).send("Profile update failed");
  }
};

exports.updateTahap2 = async (req, res) => {
  const { email } = req.user; // from authCheck middleware
  try {
    const updated = await User.update(
      {
        lolostahapdua: true,
      },
      { where: { id: req.body.userid } }
    );
    res.json(updated);
  } catch (err) {
    console.log(err);
    res.status(400).send("Profile update failed");
  }
};

exports.updateBatalTahap2 = async (req, res) => {
  const { email } = req.user; // from authCheck middleware
  try {
    const updated = await User.update(
      {
        lolostahapdua: true,
      },
      { where: { id: req.body.userid } }
    );
    res.json(updated);
  } catch (err) {
    console.log(err);
    res.status(400).send("Profile update failed");
  }
};
