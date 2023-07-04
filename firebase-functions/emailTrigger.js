const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

//* create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'stolenornot.app@gmail.com',
        pass: functions.config().nodemailer.password,
    }
});

exports.sendOrderEmail = functions.firestore
    .document('orders/{orderId}')
    .onCreate((snap, context) => {
        const mailOptions = {
            from: 'stolenornot.app@gmail.com',
            to: snap.data().email,
            subject: 'Order Confirmation',
            text: `Thanks for your order! Your order number is ${snap.id}`
        };

        return transporter.sendMail(mailOptions, (error, data) => {
            if (error) {
                console.log(error)
                return
            }
            console.log("Sent!")
        });
    });
