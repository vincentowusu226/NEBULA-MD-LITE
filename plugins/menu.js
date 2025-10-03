const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')
const os = require("os")
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, Func, fetchJson} = require('../lib/functions')
const axios = require('axios')
cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "📜",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: '',
fun: '',
voice: '',
other: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `${config.PREFIX}${commands[i].pattern}\n`;
 }
}

let madeMenu =`*👋 Hello ${pushname}*
*Welcome to NEBULA MD LITE*
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ 」
│◈ *яυηтιмє* *${runtime(process.uptime())}*
│◈ *σωηєя ηαмє* Rɪᴅᴢ Cᴏᴅᴇʀ
│◈ *σωηєя ηυмвєя* 263714732501
 *┕──────────────────❒*
 *╭────❒ 📥 *𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞𝐧𝐮*❒*
 *├◈ .ig*
 *├◈.apk*
 *├◈.apkdl*
 *├◈.twitter*
 *├◈.gdrive*
 *├◈.mediafire*
 *├◈.fb*
 *├◈.play*
 *├◈.video*
 *├◈.tt*
 *┕──────────────────❒*

  *╭────❒ 𝐌𝐚𝐢𝐧 𝐌𝐞𝐧𝐮❒*
  *├◈.menu*
  *├◈.alive*
  *├◈.ping*
  *├◈.system*
  *├◈.runtime*
  *├◈.update*
  *├◈setautobio*
  *├◈ restart*
  *├◈.news*
  *├◈.repo*
  *├◈.owner*
  *┕──────────────────❒*
  
    *╭────❒ group menu❒*
  *├◈.mute*
  *├◈.add*
  *├◈.unmute*
  *├◈.demote*
  *├◈.promote*
  *├◈.del*
  *├◈.getpic*
  *├◈.remove*
  *├◈.setwelcome*
  *├◈.setgoodbye*
  *┕──────────────────❒*

*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ Rɪᴅᴢ Cᴏᴅᴇʀ*👨‍💻`
await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
