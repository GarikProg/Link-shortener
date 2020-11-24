const fetch = require("node-fetch");

const command = process.argv[2];
const hostInput = process.argv[3].split("=")[1];

const getStats = async (host) => {
  try {
    const response = await fetch(`${host}/links`);
    const stats = await response.json();
    console.table(stats);
  } catch (error) {
    console.log(
      "Возникла ошибка при обращении к серверу, проверьте правильность вводимых данных (наименование хоста)"
    );
  }
};

switch (command) {
  case "--get-stats":
    getStats(hostInput);
    break;
  default:
    console.log("Такой команды не существует");
}
