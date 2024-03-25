// index.js
const ai = require('./scripts/ai');

ai(); // Вызываем функцию из ai.js

exports.handler = async (event) => {
  const scriptName = event.scriptName;
  const scriptFunction = scripts[scriptName];
  
  if (scriptFunction) {
    scriptFunction();
    return { statusCode: 200, body: `Скрипт "${scriptName}" успешно выполнен.` };
  } else {
    return { statusCode: 404, body: `Скрипт с именем "${scriptName}" не найден.` };
  }
};
