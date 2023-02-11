const sgMail = require( '@sendgrid/mail' )
require( 'dotenv' ).config()

const sendgridAPIKey = process.env.SENDGRID_API_KEY

sgMail.setApiKey( sendgridAPIKey )

const sendWelcomeEmail = ( email, name ) => {
  sgMail.send( {
    to: email,
    from: "ymw0331@hotmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app`,
  } )

}

const sendCancellationEmail = ( email, name ) => {
  sgMail.send( {
    to: email,
    from: "ymw0331@hotmail.com",
    subject: "Goodbye!",
    text: `${name}. Hope you see you soon`,
  } )

}

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail
}