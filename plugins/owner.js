cmd({
    pattern: "owner",
    react: "👑",
    desc: "Show bot owner info",
    category: "info",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const caption = `
┏━━━⬡ *NEBULA MD LITE - OWNER* ⬡━━━┓
┃ 👑 *Owner Name:* Ridz coder
┃ 📱 *WhatsApp:* wa.me/254701234567
┃ 🌐 *GitHub:* https://github.com/Ridz-coder01
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