module.exports = (length = 5) => {
  const charAndNumbers = 'qwertyuiopasdfghjkkkkkkklzxcvbnm1234567890';
  let shortURL = '';
  while (shortURL.length < length) {
    shortURL += charAndNumbers[Math.floor(Math.random() * charAndNumbers.length)];
  }
  return shortURL;
};
