const config = {
    name: "adduser",
    aliases: ["add"],
    description: "Add user to group",
    usage: "[uid/profileUrl]",
    cooldown: 3,
    permissions: [2],
    credits: "SINGU-💌💌"
}

const langData = {
    "en_US": {
        "missingInput": "You have not entered the ID or link profile of the person to add to the group.",
        "botNotAdmin": "The bot needs to be granted group administration rights to perform this command.",
        "invalidInput": "ID or link profile is invalid.",
        "botAdd": "The bot cannot add itself to the group.",
        "selfAdd": "You cannot use this command to add yourself to the group.",
        "success": "Added successfully.",
        "error": "An error has occurred, please try again later."
    },
    "vi_VN": {
        "missingInput": "Bạn chưa nhập ID hoặc link profile của người cần thêm vào nhóm.",
        "botNotAdmin": "Bot cần được cấp quyền quản trị nhóm để thực hiện lệnh này.",
        "invalidInput": "ID hoặc link profile không hợp lệ.",
        "botAdd": "Bot không thể tự thêm chính nó vào nhóm.",
        "selfAdd": "Bạn không thể dùng lệnh này để tự thêm chính mình vào nhóm.",
        "success": "Đã thêm thành công.",
        "error": "Đã có lỗi xảy ra, vui lòng thử lại sau."
    },
    "ar_SY": {
        "missingInput": "لم تقم بإدخال المعرف أو رابط الملف الشخصي الخاص بالشخص المراد إضافته إلى المجموعة..",
        "botNotAdmin": "يحتاج البوت إلى ان يكون ادمن في المجموعة لتنفيذ هذا الأمر.",
        "invalidInput": "المعرف أو رابط الملف الشخصي غير صالح.",
        "botAdd": "لا يستطيع البوت إضافة نفسه إلى المجموعة.",
        "selfAdd": "لا يمكنك استخدام هذا الأمر لإضافة نفسك إلى المجموعة.",
        "success": "اضيف بنجاح.",
        "error": "حصل خطأ. الرجاء المحاوله مرة اخرى."
    }
}

function adduser(userID, threadID) {
    return new Promise((resolve, reject) => {
        global.api.addUserToGroup(userID, threadID, (err) => {
            if (err) return reject(err);
            resolve();
        })
    });
}

async function onCall({ message, args, getLang, data }) {
    if (!message.isGroup) return;
    const { threadID, senderID, reply } = message;
    try {
        const input = args[0]?.toLowerCase();

        if (!input) return reply(getLang('missingInput'));

        const threadInfo = data.thread.info;
        const { adminIDs } = threadInfo;

        //if (!adminIDs.some(e => e.id == global.botID)) return reply(getLang('botNotAdmin'));

        let uid = !isNaN(input) ? input : input.match(/(?:(?:http|https):\/\/)?(?:www.|m.)?(?:facebook|fb).com\/(?!home.php)(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\.-]+)/)?.[1];
        if (!uid) return reply(getLang('invalidInput'));
        if (isNaN(uid)) {
            uid = (await api.getUserID(uid))[0].userID;
        }

        if (!uid || isNaN(uid)) return reply(getLang('invalidInput'));

        if (uid == global.botID) return reply(getLang('botAdd'));
        if (uid == senderID) return reply(getLang('selfAdd'));

        // I won't check if the user is already in the group because it's not a good idea to do so ¯\_(ツ)_/¯

        await adduser(uid, threadID);
        return reply(getLang('success'));
    } catch (e) {
        console.error(e);
        return reply(getLang('error'));
    }
}

export default {
    config,
    langData,
    onCall
}
