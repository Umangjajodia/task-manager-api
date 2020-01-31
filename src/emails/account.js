const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);


const sendWelcomeEmail = (email,name)=>{
    sgMail.send({
        to: email,
        from: 'umangjajodia4@gmail.com',
        subject: 'thanks for joining',
        text: 'Welcome to the app, $(name). Let me know how you get along with the app.'

    })
}

const sendCancellationEmail = (email,name)=>{
    sgMail.send({
        to: email,
        from: 'umangjajodia4@gmail.com',
        subject: 'sorry to see you go',
        text: 'Goodbye, $(name). I hope to see you back sometime soon'
    })
}
    module.exports = {
        sendWelcomeEmail,
        sendCancellationEmail
    }