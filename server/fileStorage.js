const fs = require('fs');
const randomLink = require('./randomLink/randomLink.js');

const getLinks = () => {
  const arrLinks = fs.readFileSync('storage.json', 'utf-8');
  return JSON.parse(arrLinks);
};

const createLink = (newLink) => {
  const storage = getLinks();
  let link;
  storage.complexLinks.forEach((el) => {
    if (el.longLink === newLink) {
      link = el;
    }
  });
  if (link) {
    return link;
  }
  const newComplexLink = {
    longLink: newLink,
    shortLink: randomLink(),
    counter: 0,
  };
  storage.complexLinks.push(newComplexLink);
  storage.shortLinks.push(newComplexLink.shortLink);
  storage.updatedAt = new Date();
  fs.writeFileSync('storage.json', JSON.stringify(storage));
  return newComplexLink;
};

const updateCounter = (shortLink) => {
  const storage = getLinks();
  let link;
  storage.complexLinks.forEach((el) => {
    if (el.shortLink === shortLink) {
      el.counter += 1;
      link = el;
    }
  });
  storage.updatedAt = new Date();
  fs.writeFileSync('storage.json', JSON.stringify(storage));
  return link;
};

module.exports = {
  getLinks,
  createLink,
  updateCounter,
};
