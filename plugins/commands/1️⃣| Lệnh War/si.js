import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const config = {
    name: "si",
    description: "",
    usage: "",
    cooldown: 3,
    permissions: [2],
};
const content = [
 `💌💌𝙑𝙖̣𝙣 𝙠𝙞𝙚̂́𝙥 𝙡𝙪𝙤̂𝙣 𝙝𝙤̂̀𝙞🔥,  𝘼𝙣𝙝 𝙢𝙖̃𝙞 𝙗𝙖́ " 🆂🅸🅽🅶🆄"✨🫧🌟
🐾🐾🐾©𝓓𝓸𝓪𝓷 𝓗𝓾𝓾 𝓣𝓱𝓪𝓷𝓰©[🆂🅸🅽🅶🆄]✨🫧🌟

🍼🍼ʚ𝐍𝐡𝐤𝐲ɞ ʚ𝐂𝐭𝐞ɞ🍼🍼  (𝐇ø𝐚𝐑𝐨̛𝐢̂-𝐂̧𝐮̛̉𝐚𝐏𝐡𝐚̣̂𝐭 𝐕𝐚̣𝐧̃𝐕𝐚̣̂𝐭-𝐂̧𝐮́𝐢̂Đ𝐚̂̀𝐮)🌥️💕🫧🌥️💕🫧
🌌🌌🌌𝓣𝓪𝔂 𝓹𝓱𝓪̉𝓲 𝓸̂𝓶 𝓮𝓶, 𝓽𝓪𝔂 𝓽𝓻𝓪́𝓲  𝓦𝓪𝓻, 𝓓𝓮̣𝓹 𝓫𝓸̉ 𝓵𝓾̃ 𝓬𝓪̣̆𝓷 𝓫𝓪̃ 𝓬𝓾̉𝓪 𝓼𝓪̀𝓷 𝓽𝓻𝓮𝓸!!!💌💌



#💌💌𝙑𝙖̣𝙣 𝙠𝙞𝙚̂́𝙥 𝙡𝙪𝙤̂𝙣 𝙝𝙤̂̀𝙞🔥,  𝘼𝙣𝙝 𝙢𝙖̃𝙞 𝙗𝙖́ " 🆂🅸🅽🅶🆄"✨🫧🌟
🐾🐾🐾©𝓓𝓸𝓪𝓷 𝓗𝓾𝓾 𝓣𝓱𝓪𝓷𝓰©[🆂🅸🅽🅶🆄]✨🫧🌟

🍼🍼ʚ𝐍𝐡𝐤𝐲ɞ ʚ𝐂𝐭𝐞ɞ🍼🍼  (𝐇ø𝐚𝐑𝐨̛𝐢̂-𝐂̧𝐮̛̉𝐚𝐏𝐡𝐚̣̂𝐭 𝐕𝐚̣𝐧̃𝐕𝐚̣̂𝐭-𝐂̧𝐮́𝐢̂Đ𝐚̂̀𝐮)🌥️💕🫧🌥️💕🫧
🌌🌌🌌𝓣𝓪𝔂 𝓹𝓱𝓪̉𝓲 𝓸̂𝓶 𝓮𝓶, 𝓽𝓪𝔂 𝓽𝓻𝓪́𝓲  𝓦𝓪𝓻, 𝓓𝓮̣𝓹 𝓫𝓸̉ 𝓵𝓾̃ 𝓬𝓪̣̆𝓷 𝓫𝓪̃ 𝓬𝓾̉𝓪 𝓼𝓪̀𝓷 𝓽𝓻𝓮𝓸!!!💌💌



💌💌𝙑𝙖̣𝙣 𝙠𝙞𝙚̂́𝙥 𝙡𝙪𝙤̂𝙣 𝙝𝙤̂̀𝙞🔥,  𝘼𝙣𝙝 𝙢𝙖̃𝙞 𝙗𝙖́ " 🆂🅸🅽🅶🆄"✨🫧🌟
🐾🐾🐾©𝓓𝓸𝓪𝓷 𝓗𝓾𝓾 𝓣𝓱𝓪𝓷𝓰©[🆂🅸🅽🅶🆄]✨🫧🌟

🍼🍼ʚ𝐍𝐡𝐤𝐲ɞ ʚ𝐂𝐭𝐞ɞ🍼🍼  (𝐇ø𝐚𝐑𝐨̛𝐢̂-𝐂̧𝐮̛̉𝐚𝐏𝐡𝐚̣̂𝐭 𝐕𝐚̣𝐧̃𝐕𝐚̣̂𝐭-𝐂̧𝐮́𝐢̂Đ𝐚̂̀𝐮)🌥️💕🫧🌥️💕🫧
🌌🌌🌌𝓣𝓪𝔂 𝓹𝓱𝓪̉𝓲 𝓸̂𝓶 𝓮𝓶, 𝓽𝓪𝔂 𝓽𝓻𝓪́𝓲  𝓦𝓪𝓻, 𝓓𝓮̣𝓹 𝓫𝓸̉ 𝓵𝓾̃ 𝓬𝓪̣̆𝓷 𝓫𝓪̃ 𝓬𝓾̉𝓪 𝓼𝓪̀𝓷 𝓽𝓻𝓮𝓸!!!💌💌



💌💌𝙑𝙖̣𝙣 𝙠𝙞𝙚̂́𝙥 𝙡𝙪𝙤̂𝙣 𝙝𝙤̂̀𝙞🔥,  𝘼𝙣𝙝 𝙢𝙖̃𝙞 𝙗𝙖́ " 🆂🅸🅽🅶🆄"✨🫧🌟
🐾🐾🐾©𝓓𝓸𝓪𝓷 𝓗𝓾𝓾 𝓣𝓱𝓪𝓷𝓰©[🆂🅸🅽🅶🆄]✨🫧🌟

🍼🍼ʚ𝐍𝐡𝐤𝐲ɞ ʚ𝐂𝐭𝐞ɞ🍼🍼  (𝐇ø𝐚𝐑𝐨̛𝐢̂-𝐂̧𝐮̛̉𝐚𝐏𝐡𝐚̣̂𝐭 𝐕𝐚̣𝐧̃𝐕𝐚̣̂𝐭-𝐂̧𝐮́𝐢̂Đ𝐚̂̀𝐮)🌥️💕🫧🌥️💕🫧
🌌🌌🌌𝓣𝓪𝔂 𝓹𝓱𝓪̉𝓲 𝓸̂𝓶 𝓮𝓶, 𝓽𝓪𝔂 𝓽𝓻𝓪́𝓲  𝓦𝓪𝓻, 𝓓𝓮̣𝓹 𝓫𝓸̉ 𝓵𝓾̃ 𝓬𝓪̣̆𝓷 𝓫𝓪̃ 𝓬𝓾̉𝓪 𝓼𝓪̀𝓷 𝓽𝓻𝓮𝓸!!!💌💌



💌💌𝙑𝙖̣𝙣 𝙠𝙞𝙚̂́𝙥 𝙡𝙪𝙤̂𝙣 𝙝𝙤̂̀𝙞🔥,  𝘼𝙣𝙝 𝙢𝙖̃𝙞 𝙗𝙖́ " 🆂🅸🅽🅶🆄"✨🫧🌟
🐾🐾🐾©𝓓𝓸𝓪𝓷 𝓗𝓾𝓾 𝓣𝓱𝓪𝓷𝓰©[🆂🅸🅽🅶🆄]✨🫧🌟

🍼🍼ʚ𝐍𝐡𝐤𝐲ɞ ʚ𝐂𝐭𝐞ɞ🍼🍼  (𝐇ø𝐚𝐑𝐨̛𝐢̂-𝐂̧𝐮̛̉𝐚𝐏𝐡𝐚̣̂𝐭 𝐕𝐚̣𝐧̃𝐕𝐚̣̂𝐭-𝐂̧𝐮́𝐢̂Đ𝐚̂̀𝐮)🌥️💕🫧🌥️💕🫧
🌌🌌🌌𝓣𝓪𝔂 𝓹𝓱𝓪̉𝓲 𝓸̂𝓶 𝓮𝓶, 𝓽𝓪𝔂 𝓽𝓻𝓪́𝓲  𝓦𝓪𝓻, 𝓓𝓮̣𝓹 𝓫𝓸̉ 𝓵𝓾̃ 𝓬𝓪̣̆𝓷 𝓫𝓪̃ 𝓬𝓾̉𝓪 𝓼𝓪̀𝓷 𝓽𝓻𝓮𝓸!!!💌💌



💌💌𝙑𝙖̣𝙣 𝙠𝙞𝙚̂́𝙥 𝙡𝙪𝙤̂𝙣 𝙝𝙤̂̀𝙞🔥,  𝘼𝙣𝙝 𝙢𝙖̃𝙞 𝙗𝙖́ " 🆂🅸🅽🅶🆄"✨🫧🌟
🐾🐾🐾©𝓓𝓸𝓪𝓷 𝓗𝓾𝓾 𝓣𝓱𝓪𝓷𝓰©[🆂🅸🅽🅶🆄]✨🫧🌟

🍼🍼ʚ𝐍𝐡𝐤𝐲ɞ ʚ𝐂𝐭𝐞ɞ🍼🍼  (𝐇ø𝐚𝐑𝐨̛𝐢̂-𝐂̧𝐮̛̉𝐚𝐏𝐡𝐚̣̂𝐭 𝐕𝐚̣𝐧̃𝐕𝐚̣̂𝐭-𝐂̧𝐮́𝐢̂Đ𝐚̂̀𝐮)🌥️💕🫧🌥️💕🫧
🌌🌌🌌𝓣𝓪𝔂 𝓹𝓱𝓪̉𝓲 𝓸̂𝓶 𝓮𝓶, 𝓽𝓪𝔂 𝓽𝓻𝓪́𝓲  𝓦𝓪𝓻, 𝓓𝓮̣𝓹 𝓫𝓸̉ 𝓵𝓾̃ 𝓬𝓪̣̆𝓷 𝓫𝓪̃ 𝓬𝓾̉𝓪 𝓼𝓪̀𝓷 𝓽𝓻𝓮𝓸!!!💌💌



💌💌𝙑𝙖̣𝙣 𝙠𝙞𝙚̂́𝙥 𝙡𝙪𝙤̂𝙣 𝙝𝙤̂̀𝙞🔥,  𝘼𝙣𝙝 𝙢𝙖̃𝙞 𝙗𝙖́ " 🆂🅸🅽🅶🆄"✨🫧🌟
🐾🐾🐾©𝓓𝓸𝓪𝓷 𝓗𝓾𝓾 𝓣𝓱𝓪𝓷𝓰©[🆂🅸🅽🅶🆄]✨🫧🌟

🍼🍼ʚ𝐍𝐡𝐤𝐲ɞ ʚ𝐂𝐭𝐞ɞ🍼🍼  (𝐇ø𝐚𝐑𝐨̛𝐢̂-𝐂̧𝐮̛̉𝐚𝐏𝐡𝐚̣̂𝐭 𝐕𝐚̣𝐧̃𝐕𝐚̣̂𝐭-𝐂̧𝐮́𝐢̂Đ𝐚̂̀𝐮)🌥️💕🫧🌥️💕🫧
🌌🌌🌌𝓣𝓪𝔂 𝓹𝓱𝓪̉𝓲 𝓸̂𝓶 𝓮𝓶, 𝓽𝓪𝔂 𝓽𝓻𝓪́𝓲  𝓦𝓪𝓻, 𝓓𝓮̣𝓹 𝓫𝓸̉ 𝓵𝓾̃ 𝓬𝓪̣̆𝓷 𝓫𝓪̃ 𝓬𝓾̉𝓪 𝓼𝓪̀𝓷 𝓽𝓻𝓮𝓸!!!💌💌




💌💌𝙑𝙖̣𝙣 𝙠𝙞𝙚̂́𝙥 𝙡𝙪𝙤̂𝙣 𝙝𝙤̂̀𝙞🔥,  𝘼𝙣𝙝 𝙢𝙖̃𝙞 𝙗𝙖́ " 🆂🅸🅽🅶🆄"✨🫧🌟
🐾🐾🐾©𝓓𝓸𝓪𝓷 𝓗𝓾𝓾 𝓣𝓱𝓪𝓷𝓰©[🆂🅸🅽🅶🆄]✨🫧🌟 ••  ʕ•̫͡•ʔ•̫͡•ʔ 📿🐼🍃︎❓`
  ]

  //dvn


  setInterval(() => {
    let data = JSON.parse(readFileSync(join(global.assetsPath, 'spam.json'), "utf-8"));
    for (let [key, value] of Object.entries(data)) {
      if (value.enable) {
        if (value.index >= content.length) value.index = 0;
        api.sendMessage(content[value.index], key, () => {
          value.index++;
          writeFileSync(join(global.assetsPath, 'spam.json'), JSON.stringify(data, null, 4));
        })
      }
    }
  }, 9000)

const path = join(global.assetsPath, 'spam.json');

function onLoad() {
    if(!existsSync(path)) {
        writeFileSync(path, JSON.stringify({}), "utf-8");
    }
}

async function onCall({ message, args }) {
    if(!message.isGroup) return;

    const { threadID } = message;

    let data = JSON.parse(readFileSync(path, "utf-8"));
    if(!data[threadID]) data[threadID] = {
        enable: true,
        index: 0
    };
    let input = args.join(" ");
    if(input == "off") {
        data[threadID].enable = false;
    } else {
        data[threadID].enable = true;
    }
      data[threadID].index = 0;
    writeFileSync(path, JSON.stringify(data, null, 4), "utf-8");

    message.send(`anh ${(input == "off" ? "ơơi" : "đđây")}`);
}

export {
    config,
    onLoad,
    onCall
}