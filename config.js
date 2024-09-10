//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "2347042665679";
global.owner = process.env.OWNER_NUMBER || "2347042665679";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0M0eEJXNXVRb1lFdGNJOWI0MmpWdFdzR1diYmRCbTY1anpDMG54ek0wRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN2NvdGQ2aFpKT3l0aHFxcWtETndkYVFUSzhBdUl3U2Z6SFlReWxMUjJVQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2S1BTc0QrNE4waG12Mi9Cd3cyTjBxbkdOcmM2VUZVaDVPMFZKQnBuWFVNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyazk3ZXJDcmxSdVA2QWJKc2J5NzVSQ291M3kxaUFiODdidUJ3dHBoK0M0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNOcVlJandhMmlKVXpNU2FiZlZFdXNkc1JYU0NLVzRsNEhSQ2JsTy9iM289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZmOHJ5dFhKdTBnaHVHOXVRNmtQZlM1VkpLUFFsYWFxSHVWdWQxTVZ6WDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkkzOXN5WkFtcVk2QXFPcEZqTUxlZThjT3Rnemx1SVJFSG0rcFpUdHVGMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVzhpTFlUa3BicURrTng0M2RRZ2ZEbnBRS3lCM1JJN1ZPb0xONTB3MDdSbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJrN3lwYlpQNkZHMjBBQjZ4UmwyU0tVbmJOSkdCWEFxa3BLNUFubjhSV091cTBSa1d5bVAzK2U2U3BwZUhSMzQ3cDdob1RVZHdHTHhGSS9XOE5CbWpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgyLCJhZHZTZWNyZXRLZXkiOiI3dXc0cnhjamRsOWlvd21pOHZ3eHZPcHZsQzlMblhNOHlpV3p3MHgxN3ZBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwNDI2NjU2NzlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMzBFMEJGM0I4NzM4MTkxNzRBNkE0NkU2NkQzQzU3QzIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNTk2NzkwOH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA0MjY2NTY3OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGRTY4OTQyRDVBMDkxN0MzNDlGMjlDMDFEQUZEQUY1MSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI1OTY3OTA4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJyaTVMeEpMdFEtU2VySHo1X2VlWGhnIiwicGhvbmVJZCI6IjhhZDljNzFkLTRjMjctNDZlOS1hZTliLTI4ZmRhYmE1ZWM4MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLb2I2ZEhQY3BTYmduWlg2aFdZc3E4SWwrekU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUMxVFJYbFlhOThsOWtYUGRCMTFGNEE4NWw0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNLVEE0S0RMIiwibWUiOnsiaWQiOiIyMzQ3MDQyNjY1Njc5OjI0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IktpbmcuIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKanltY01IRUpQY2dMY0dHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJQNlB3dVp4WHRQQnhiMUhPZkFNRWZzMDhLalFpY01Fdm5TV1pDVnlaQUFjPSIsImFjY291bnRTaWduYXR1cmUiOiJWUGhtbThiQVk5TkxQazZYTXkzK3paVUt4UEdQNFBYMWNjdUd2RFJoMTh1SDhKd0NQQWh5dStyT0R3K0FUYWZ2V21uVUhMY2EwSDZYUmF3cjdPbllDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoicE82N2JQVnhBR2g1YlNNNWpFOVd3V2lPaVN0NlJuQzNXQUh5aTFYdWxzVmVJZDM5cS9mWmVWS3NPbWZraXU4dnVwY2tsalBrVnRBVVYyMTdkSTZEZ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDQyNjY1Njc5OjI0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlQrajhMbWNWN1R3Y1c5Unpud0RCSDdOUENvMEluREJMNTBsbVFsY21RQUgifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjU5Njc5MDQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ2pRIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
