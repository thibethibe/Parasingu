import cron from 'node-cron'

// learn more about cron time here:
// https://www.npmjs.com/package/node-cron?activeTab=readme
const jobs = [
  {
        time: "00 6 * * *", 
        message: () => "Chào một ngày mới đầy năng lượng đến tất cả mọi người:3",
  },
  {
        time: "00 22 * * *", 
        message: () => `22 giờ rồi hmm 
Chúc mọi người buổi khuya thật yên bình, nhớ làm việc ít thôi và đi ngủ sớm để có năng lượng cho ngày mai nhé.`,
    }
]

export default function autoSend() {
    cron.getTasks().forEach(task => task.stop());

    const timezone = global.config?.timezone || "Asia/Ho_Chi_Minh";
    if (!timezone) return;

    for (const job of jobs) {
        cron.schedule(job.time, () => {
            let i = 0;
            for (const tid of job.targetIDs || Array.from(global.data.threads.keys()) || []) {
                setTimeout(() => {
                    global.api.sendMessage({
                        body: job.message()
                    }, tid);
                }, (i++) * 300)
            }
        }, {
            timezone: timezone
        })
    }
}
