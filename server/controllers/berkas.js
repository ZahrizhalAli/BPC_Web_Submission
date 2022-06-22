const { nanoid } = require("nanoid");

// Upload KTM
exports.uploadktm = async (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file was uploaded" });
  }
  const file = req.files.file;
  console.log(file.name);
  const file_name = `${nanoid()}.${file.name.split(".")[1]}`;

  file.mv(`${__dirname}/uploads/ktm/${file_name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file_name, filePath: `/uploads/ktm/${file_name}` });
  });
};

// Upload KRS
exports.uploadsak = async (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file was uploaded" });
  }
  const file = req.files.file;
  const file_name = `${nanoid()}.${file.name.split(".")[1]}`;
  file.mv(`${__dirname}/uploads/sak/${file_name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file_name, filePath: `/uploads/sak/${file_name}` });
  });
};

// Upload Bukti Bayar
exports.uploadbb = async (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file was uploaded" });
  }
  const file = req.files.file;
  const file_name = `${nanoid()}.${file.name.split(".")[1]}`;
  file.mv(`${__dirname}/uploads/bb/${file_name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file_name, filePath: `/uploads/bb/${file_name}` });
  });
};

// Upload Bukti Twibbon
exports.uploadtwibbon = async (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file was uploaded" });
  }
  const file = req.files.file;
  const file_name = `${nanoid()}.${file.name.split(".")[1]}`;
  file.mv(`${__dirname}/uploads/twibbon/${file_name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({
      fileName: file_name,
      filePath: `/uploads/twibbon/${file_name}`,
    });
  });
};
// kirim gambar
exports.sendFiles = async (req, res) => {
  if (req.params.filename === null) {
    return res.status(400).json({ msg: "File Not found" });
  }
  res.sendFile(
    `${__dirname}/uploads/${req.params.path}/${req.params.filename}`
  );
};

// Upload File pengumuman
exports.uploadfilepengumuman = async (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file was uploaded" });
  }
  const file = req.files.file;
  console.log(file.name);
  const file_name = `${nanoid()}.${file.name.split(".")[1]}`;

  file.mv(`${__dirname}/uploads/announcement/${file_name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({
      fileName: file_name,
      filePath: `/uploads/announcement/${file_name}`,
    });
  });
};

// Karya BCC
exports.uploadbcc = async (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file was uploaded" });
  }
  const file = req.files.file;
  console.log(file.name);
  const file_name = `${nanoid()}.${file.name.split(".")[1]}`;

  file.mv(`${__dirname}/uploads/bcc/${file_name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({
      fileName: file_name,
      filePath: `/uploads/bcc/${file_name}`,
    });
  });
};

// Karya BCC
exports.uploadbcc2 = async (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file was uploaded" });
  }
  const file = req.files.file;
  console.log(file.name);
  const file_name = `${nanoid()}.${file.name.split(".")[1]}`;

  file.mv(`${__dirname}/uploads/bcc2/${file_name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({
      fileName: file_name,
      filePath: `/uploads/bcc2/${file_name}`,
    });
  });
};

// Karya BCC
exports.uploadbpc = async (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file was uploaded" });
  }
  const file = req.files.file;
  console.log(file.name);
  const file_name = `${nanoid()}.${file.name.split(".")[1]}`;

  file.mv(`${__dirname}/uploads/bpc/${file_name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({
      fileName: file_name,
      filePath: `/uploads/bpc/${file_name}`,
    });
  });
};
