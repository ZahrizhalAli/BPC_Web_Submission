const db = require("../models");
const Pengumuman = db.pengumuman;
const Op = db.Sequelize.Op;

exports.createPengumuman = async (req, res) => {
  const { title, description, uploadedfile } = req.body;

  Pengumuman.create({
    title,
    description,
    file: uploadedfile,
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.updatePengumuman = async (req, res) => {
  const { title, description, uploadedfile } = req.body;
  try {
    const updated = await Pengumuman.update(
      {
        title,
        description,
        file: uploadedfile,
      },
      {
        where: {
          id: req.params.pid,
        },
      }
    );
    res.json(updated);
  } catch (err) {
    console.log(err);
    res.status(400).send("Profile update failed");
  }
};

exports.hapusPengumuman = async (req, res) => {
  try {
    await Pengumuman.destroy({
      where: { id: req.params.pid },
    }).then((data) => {
      res.json(data);
    });
  } catch (err) {
    console.log(err);
    res.status(400).send("Category delete failed");
  }
};

exports.getPengumuman = async (req, res) => {
  Pengumuman.findOne({ id: req.params.pid }).then((data) => {
    res.json(data);
  });
};

exports.getAllPengumuman = async (req, res) => {
  //req.user.email came from authCheck middleware.
  Pengumuman.findAll().then((data) => {
    res.json(data);
  });
};
