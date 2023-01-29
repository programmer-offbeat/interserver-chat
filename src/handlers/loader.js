const { readdirSync } = require(`fs`);
const colors = require("colors");

console.log(colors.cyan(`╭┈━━━━ Handlers starting ━━━━╮
▸ MADE BY : OfFbeat ̥ ˊˎ-#4035
▸ BOT FILE LOCATION : ${process.cwd()}
╰────── ⋅ ⋅ ── ✩ ── ⋅ ⋅─────╯`));

module.exports = async (client) => {

    console.log(colors.green(`╭── ⋅ ⋅ ── LOADING COMMANDS ── ⋅ ⋅ ──╮`));
    readdirSync(`${process.cwd()}/src/commands/`)
        .forEach((cmd) => {
            const commandfiles = readdirSync(`${process.cwd()}/src/commands/${cmd}/`)
                .filter((file) => file.endsWith(`.js`))
                .forEach(file => {
                    let address = require(`${process.cwd()}/src/commands/${cmd}/${file}`);
                    client.commands.set(address.name, address);
                    console.log(colors.yellow.dim(`╰┈➤ ${address.name} has loaded.`))
                })
        })
        console.log(`╰───── ⋅ ⋅ ────── ✩ ────── ⋅ ⋅ ─────╯`.green);

    // load the events
    console.log(colors.green(`╭── ⋅ ⋅ ── LOADING EVENTS ── ⋅ ⋅ ──╮`));
    readdirSync(`${process.cwd()}/src/events/`).filter((file) => file.endsWith(`.js`) && !file.includes(`MessageHandler`))
        .forEach((file) => {
            const address = require(`${process.cwd()}/src/events/${file}`)
            let event = file.split(`.`)[0];
            client.on(event, address.bind(null, client));
            console.log(colors.yellow(`╰┈➤ ${event} has loaded.`));
        });
        
        const main = require(`${process.cwd()}/src/events/MessageHandler.js`)
        client.on('messageCreate', main.bind(null, client));
        console.log(`╰┈➤ MessageHandler has loaded.`.yellow)


        console.log(`╰───── ⋅ ⋅ ────── ✩ ────── ⋅ ⋅ ───╯`.green);
        console.log(colors.bold(`\n───────────────── ⋆⋅☆⋅⋆ ─────────────────\n`))
        //logging in

        console.log(` ҉　Trying to login to the bot. . .\n`.magenta.bold)
        //if()

        //error handlers
    process.on('unhandledRejection', (reason, p) => {
        console.log('\n\nANTICRASH FIRED\n═══ Unhandled Rejection ═══\n'.toUpperCase().bgRed);
        console.log('Reason: ', reason.stack ? String(reason.stack) : String(reason));
        console.log('═══ Unhandled Rejection ═══\n\n\n'.toUpperCase().bgYellow.dim);
    });
    process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.log('\n\nANTICRASH FIRED\n═══ Uncaught Exception Monitor ═══\n'.toUpperCase().bgRed);
    });
    process.on("uncaughtException", (err, origin) => {
        console.log('\n\nANTICRASH FIRED\n═══ Uncaught Exception ═══\n'.toUpperCase().bgRed);
        console.log('Exception: ', err.stack ? err.stack : err)
        console.log('═══ Uncaught Exception ═══\n\n\n\n\n'.toUpperCase().bgYellow.dim);
    })
    process.on('multipleResolves', (type, promise, reason) => {
     console.log('\n\nANTICRASH FIRED\n═══ Multiple Resolves ═══'.toUpperCase().bgRed);
    console.log(type, promise, reason);
    console.log('═══ Multiple Resolves ═══\n\n\n'.toUpperCase().bgYellow.dim);
    });
    
};
