const express = require('express');
const { Link } = require('../DB/modelLink.js');

const router = express.Router();

router.get('/:shortLink', async (req, res) => {
  try {
    const link = await Link.findOne({
      where: {
        shortLink: req.params.shortLink,
      },
    });
    if (link) {
      link.counter += 1;
      await link.save();
      res.status(200).json(link);
    } else {
      res.status(404).end();
    }
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
});

module.exports = router;
