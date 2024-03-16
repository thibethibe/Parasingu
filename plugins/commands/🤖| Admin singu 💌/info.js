import { createReadStream } from "node:fs";
import { join } from "node:path"

const config = {
  name: "info",
  description: "",
  usage: "",
  cooldown: 3,
  permissions: [2],
};

let i = "『✒️』→𝗡𝗮𝗺𝗲: SINGU-💌💌\n『📋』→ 𝗔𝗴𝗲: 18+\n『👥』→ 𝙎𝙚𝙭: 𝗡𝘂̛̃\n『🎂』→ 𝗬𝗲𝗮𝗿 𝗢𝗳 𝗕𝗶𝗿𝘁𝗵: 07/08/2004\n『💫』→ 𝗛𝗲𝗶𝗴𝗵𝘁 / 𝗪𝗲𝗶𝗴𝗵𝗲𝗱: 1m61/55𝗸𝗴\n『💘』→𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗵𝗶𝗽𝘀:©𝓓𝓸𝓪𝓷 𝓗𝓾𝓾 𝓣𝓱𝓪𝓷𝓰©[🆂🅸🅽🅶🆄]\n『🗺️』→𝗟𝗶𝘃𝗶𝗻𝗴 𝗶𝗻:𝗛𝗼 𝗖𝗵𝗶 𝗠𝗶𝗻𝗵 𝗖𝗶𝘁𝘆\n『🌐』→𝗖𝗼𝘂𝗻𝘁𝗿𝘆: 𝗩𝗶𝗲̣̂𝘁 𝗡𝗮𝗺 ";

async function onCall({ message }) {
  message.send({
    body: i,
    attachment: createReadStream(join(global.assetsPath, `singu.jpg`))

  })
}

export {
  config,
  onCall
}