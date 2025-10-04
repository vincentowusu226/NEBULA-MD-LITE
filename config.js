const fs = require('fs');
if (fs.existsSync('config.env')) {
  require('dotenv').config({ path: './config.env' });
}

function convertToBool(text, fault = 'true') {
  return text === fault ? true : false;
}

module.exports = {
  SESSION_ID: process.env.SESSION_ID || "2yxHSZCZ#jMY1ceSs_vTCl6JdYKzA11fDKXRha31A4ibtxeonwAw",
  MONGODB: process.env.MONGODB || "your mongodb",

  // ✅ you can add more config values here
  PREFIX: process.env.PREFIX || ".",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "263714732501",
  AUTO_READ: convertToBool(process.env.AUTO_READ, "true"),
  AUTO_TYPING: convertToBool(process.env.AUTO_TYPING, "true")
};
