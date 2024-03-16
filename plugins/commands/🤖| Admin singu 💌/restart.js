const config = {
    name: "restart",
    aliases: ["rs", "rest", "reboot"],
    permissions: [2],
    isAbsolute: true
}

async function onCall({ message, getLang }) {
    await message.reply("Đợi em tí nha anh ơi...");
    global.restart();
}

export default {
    config,
    onCall
}
