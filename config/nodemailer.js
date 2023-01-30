import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com" ,
    port: 587,
    auth:{
        user: email,
        pass
    },
});

export const mailOptions = {
    from: email,
    to: "devs@apolar.tech",
}