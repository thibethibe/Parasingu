const config = {
    name: "levelup",
    aliases: ["lvlup"],
    permissions: [1, 2],
    description: "Turn on/off level up notification",
    usage: "[on/off]",
    cooldown: 5,
    credits: "SINGU-💌💌"
}

const langData = {
    "en_US": {
        "levelup.on": "Level up notification has been turned on.",
        "levelup.off": "Level up notification has been turned off.",
        "levelup.alreadyOn": "Level up notification is already turned on.",
        "levelup.alreadyOff": "Level up notification is already turned off.",
        "error": "An error occurred, please try again later."
    },
    "vi_VN": {
        "levelup.on": "Thông báo lên cấp đã được bật.",
        "levelup.off": "Thông báo lên cấp đã được tắt.",
        "levelup.alreadyOn": "Thông báo lên cấp đã được bật trước đó.",
        "levelup.alreadyOff": "Thông báo lên cấp đã được tắt trước đó.",
        "error": "Đã xảy ra lỗi, vui lòng thử lại sau."
    }
}

async function changeConfig(threadID, option) {
    const { Threads } = global.controllers;

    let threadData = await Threads.getData(threadID) || null;
    if (!threadData) throw "No Thread Data";

    if (option == null) {
        option = !Boolean(threadData.levelup_noti);
    } else if (option == threadData.levelup_noti) {
        throw "Already";
    } else {
        option = Boolean(option);
    }

    await Threads.updateData(threadID, { levelup_noti: option });
    return option;
}

async function onCall({ message, args, getLang }) {
    const { threadID, reply } = message;
    let option = args[0]?.toLowerCase();
    try {
        option = option == "on" ? true : option == "off" ? false : null;
        option = await changeConfig(threadID, option);

        reply(getLang(option ? "levelup.on" : "levelup.off"));
    } catch (e) {
        if (e == "Already") {
            reply(getLang("levelup.already" + (option ? "On" : "Off")));
        } else {
            reply(getLang("error"));
        }
    }
}

export default {
    config,
    langData,
    onCall
}
