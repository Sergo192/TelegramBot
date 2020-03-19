const Telegraf = require('telegraf');
const bot = new Telegraf('1044006642:AAFkjCM8bc0aynRS5NwanSQMwQ_cr72PRnk')
var process = require('child_process');


bot.command('dir',(ctx)=>{
    process.exec('dir',function (err,stdout,stderr) {
        if (err) {
            console.log("\n"+stderr);
        } else {
            console.log(stdout);
            return ctx.reply(stdout);
        }
    })
    
    
})
bot.launch();

// let token = '1044006642:AAFkjCM8bc0aynRS5NwanSQMwQ_cr72PRnk';

// var bot = new TelegramBot(token, { polling: true });


