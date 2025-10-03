const { cmd } = require('../command')

cmd({
    pattern: "repo",
    react: "🍨",
    desc: "Show bot repository and links",
    category: "info",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const caption = `
┏━━━⬡ *NEBULA MD LITE - INFO* ⬡━━━┓
┃ 💻 *Repository:* https://github.com/Ridz-coder01/NEBULA-MD-LITE
┃ 🌐 *Website:* https://nebula-md.kesug.com
┃ 🤖 *Bot Name:* Nebula MD Lite
┃ 👑 *Owner:* Ridz coder
┃ 📌 *Commands:* ${commands.length}
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

*© Created by Ridz Coder ❦*
        `;

        await conn.sendMessage(from, {
            text: caption
        }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`⚠️ Error: ${e.message}`);
    }
});