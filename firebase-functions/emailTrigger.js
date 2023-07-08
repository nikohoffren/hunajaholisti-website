const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "hunajaholistinhunaja@gmail.com",
        pass: functions.config().nodemailer.password,
    },
});

exports.sendOrderEmail = functions.firestore
    .document("orders/{orderId}")
    .onCreate((snap, context) => {
        const data = snap.data();
        const products = data.products
            .map(
                (product) =>
                    `<li>${product.name}, Quantity: ${product.quantity}</li>`
            )
            .join("");
        const totalAmount = data.totalAmount;

        const mailOptions = {
            from: "hunajaholistinhunaja@gmail.com",
            to: [data.email, "niko.hoffren@gmail.com"],
            subject: "Tilausvahvistus",
            html: `
                <p>Kiitos tilauksestasi! Tilausnumerosi on: <strong>${
                    snap.id
                }</strong></p>
                <h3>Tilaamasi tuotteet:</h3>
                <ul>${products}</ul>
                <h3>Summa yhteensä: ${totalAmount / 100} €</h3>
            `,
        };

        return transporter.sendMail(mailOptions, (error, data) => {
            if (error) {
                console.log(error);
                return;
            }
            console.log("Sent!");
        });
    });
