import gradient from 'gradient-string';

const logger = {
    info: (message) => {
        // Green for the tag, reset for the message
        console.log(`\x1b[1m\x1b[32m[INFO]\x1b[0m \x1b[1m${gradient.retro(message)}\x1b[0m`);
    },
    warn: (message) => {
        // Yellow for the tag, reset for the message
        console.log(`\x1b[1m\x1b[33m[WARN]\x1b[0m \x1b[1m${gradient.rainbow(message)}\x1b[0m`);
    },
    error: (message) => {
        // Red for the tag, reset for the message
        console.log(`\x1b[1m\x1b[31m[ERROR]\x1b[0m \x1b[1m${gradient.retro(message)}\x1b[0m`);
    },
    system: (message) => {
        // Blue for the tag, reset for the message
        console.log(`\x1b[1m\x1b[34m[SYSTEM]\x1b[0m \x1b[1m${gradient.atlas(message)}\x1b[0m`);
    },
    custom: (message, type, color = "\x1b[36m") => {
        // Cyan color by default for the tag, reset for the message
        console.log(`\x1b[1m${color}[${type}]\x1b[0m \x1b[1m${gradient.pastel(message)}\x1b[0m`);


    },
};

export default logger;