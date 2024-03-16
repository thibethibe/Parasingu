import { readFileSync, writeFileSync, existsSync, statSync } from 'fs';
import { spawn, execSync } from 'child_process';
import semver from 'semver';
import axios from 'axios';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import moment from 'moment-timezone';  
import { } from 'dotenv/config';
import logger from './core/var/modules/logger.js';
import loadPlugins from './core/var/modules/installDep.js';

import environments from './core/var/modules/environments.get.js';

const { isGlitch, isReplit, isGitHub } = environments;

const displayVietnamTimeColored = () => {
  const vietnamTime = moment().tz("Asia/Ho_Chi_Minh").format('[Ngày] DD [tháng] MM [năm] YYYY [vào lúc] HH [giờ] mm [phút] ss [giây]');
  return chalk.hex('#FF1493')(`Hệ thống được khởi động!\n[ 𝙝𝙪̛̃𝙪 𝙩𝙝𝙖̆́𝙣𝙜-💌💌 ] 
-> Bot Đã Đựợc Chạy By SINGU-💌💌 - Bot 
-> Anh là Hw thăng trùm diệt những thăng ảo War
->facebook anh nha:https://www.facebook.com/profile.php?id=100074293234284
-> Độ ảo war của các mày đã lên 1 tầm cao mới
-> Hiện tại bây là\n${vietnamTime}\n\n`);
};

const rainbowText = `



░██████╗██╗███╗░░██╗░██████╗░██╗░░░██╗  ░██╗░░░░░░░██╗  ███╗░░██╗██╗░░██╗██╗░░██╗██╗░░░██╗
██╔════╝██║████╗░██║██╔════╝░██║░░░██║  ░██║░░██╗░░██║  ████╗░██║██║░░██║██║░██╔╝╚██╗░██╔╝
╚█████╗░██║██╔██╗██║██║░░██╗░██║░░░██║  ░╚██╗████╗██╔╝  ██╔██╗██║███████║█████═╝░░╚████╔╝░
░╚═══██╗██║██║╚████║██║░░╚██╗██║░░░██║  ░░████╔═████║░  ██║╚████║██╔══██║██╔═██╗░░░╚██╔╝░░
██████╔╝██║██║░╚███║╚██████╔╝╚██████╔╝  ░░╚██╔╝░╚██╔╝░  ██║░╚███║██║░░██║██║░╚██╗░░░██║░░░
╚═════╝░╚═╝╚═╝░░╚══╝░╚═════╝░░╚═════╝░  ░░░╚═╝░░░╚═╝░░  ╚═╝░░╚══╝╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░
╔══╗──╔╗
╚║║╝╔╗╠╬═╦═╦═╗╔╦╦═╦╦╗
╔║║╗║╚╣╠╗║╔╣╩╣║║║╬║║║
╚══╝╚═╩╝╚═╝╚═╝╠╗╠═╩═╝
──────────────╚═╝ 

`;

console.clear();

function upNodeReplit() {
    return new Promise(resolve => {
        execSync('npm i --save-dev node@16 && npm config set prefix=$(pwd)/node_modules/node && export PATH=$(pwd)/node_modules/node/bin:$PATH');
        resolve();
    })
}

async function checkUpdate() {
    logger.custom("Đang kiểm tra cập nhật...", "CẬP NHẬT");
    try {
        const res = await axios.get('https://raw.githubusercontent.com/XaviaTeam/XaviaBot/main/package.json');

        const { version } = res.data;
        const currentVersion = JSON.parse(readFileSync('./package.json')).version;
        if (semver.lt(currentVersion, version)) {
            logger.warn(`Phiên bản mới có sẵn: ${version}`);
            logger.warn(`Phiên bản hiện tại: ${currentVersion}`);
        } else {
            logger.custom("Không có cập nhật nào.", "CẬP NHẬT");
        }
    } catch (err) {
        logger.error('Không thể kiểm tra cập nhật.');
    }
}

const _1_MINUTE = 60000;
let restartCount = 0;

async function main() {
    await checkUpdate();
    await loadPlugins();
    const child = spawn('node', ['--trace-warnings', '--experimental-import-meta-resolve', '--expose-gc', 'core/_build.js'], {
        cwd: process.cwd(),
        stdio: 'inherit',
        env: process.env
    });

    child.on("close", async (code) => {
        handleRestartCount();
        if (code !== 0 && restartCount < 5) {
            console.log();
            logger.error(`Đã xảy ra lỗi với mã thoát ${code}`);
            logger.warn("Khởi động lại...");
            await new Promise(resolve => setTimeout(resolve, 2000));
            main();
        } else {
            console.log();
            logger.error("Bot ssingu đã dừng, nhấn Ctrl + C để thoát.");
        }
    });
}

function handleRestartCount() {
    restartCount++;
    setTimeout(() => {
        restartCount--;
    }, _1_MINUTE);
}

const rainbowAnimation = chalkAnimation.rainbow(rainbowText);

// // const combinedText = chalk.bgHex('#008080')(displayVietnamTimeColored());
// // console.log(combinedText);
rainbowAnimation.start();

(async () => {
    if (process.version.slice(1).split('.')[0] < 16) {
        if (isReplit) {
            try {
                logger.warn("Đang cài đặt Node.js v16 cho Repl.it...");
                await upNodeReplit();
                if (process.version.slice(1).split('.')[0] < 16) throw new Error("Không thể cài đặt Node.js v16.");
            } catch (err) {
                logger.error(err);
                process.exit(0); 
            }
        }
        logger.error("Singu yêu cầu Node 16 hoặc cao hơn. Vui lòng cập nhật phiên bản Node của bạn.");
        process.exit(0);
    }

    if (isGlitch) {
        const WATCH_FILE = {
            "restart": {
                "include": [
                    "\\.json"
                ]
            },
            "throttle": 3000
        }

        if (!existsSync(process.cwd() + '/watch.json') || !statSync(process.cwd() + '/watch.json').isFile()) {
            logger.warn("Phát hiện môi trường Glitch. Tạo watch.json...");
            writeFileSync(process.cwd() + '/watch.json', JSON.stringify(WATCH_FILE, null, 2));
            execSync('refresh');
        }
    }

    if (isGitHub) {
        logger.warn("Không khuyến khích chạy trên GitHub.");
    }

    const combinedText2 = displayVietnamTimeColored();
    console.log(combinedText2);

    main();
})();
