const express = require('express');
const randomLink = require('../randomLink/randomLink.js');
const { Link } = require('../DB/modelLink.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const links = await Link.findAll();
    res.json(links);
  } catch (error) {
    res.status(500).end();
  }
});

router.post('/', async (req, res) => {
  try {
    const link = await Link.findOne({
      where: {
        longLink: req.body.longLink,
      },
    });
    if (link) {
      res.json(link);
    } else {
      const shortLink = randomLink();
      const newLink = await Link.create({
        longLink: req.body.longLink,
        shortLink,
        counter: 0,
      });
      res.json(newLink);
    }
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
});

module.exports = router;
