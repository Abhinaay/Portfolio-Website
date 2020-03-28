/* eslint no-console: 0 */

'use strict';

const nodemailer = require('../lib/nodemailer');

async function main() {
    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({
        sendmail: true,
        newline: 'windows',
        logger: false
    });

    var sub=document.getElementById("subject");
    var msg=document.getElementById("message");
    // Message object
    let message = {
        from: 'Abhinay <abhidinanathchauhan@gmail.com>',

        // Comma separated list of recipients
        to: 'jaimatadi2121999@gmail.com',
        

        // Subject of the message
        subject: sub,

        // plaintext body
        text: msg,

        
    };

    let info = await transporter.sendMail(message);
    console.log('Message sent successfully as %s', info.messageId);
}

main().catch(err => {
    console.error(err.message);
    process.exit(1);
});