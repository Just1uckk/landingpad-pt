const validationResult = require('express-validator').validationResult;
const check = require('express-validator').check;
const nodemailer = require('nodemailer')

export function sendImageToEmail(request, response) {
  const { name, phone, email, message, from} = request.body

  const errors = validationResult(request).array();

  if (errors && errors.length) {
    response.status(400).send({ errors });
    return;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.MAIL_TO,
    subject: 'Book an online from site LandingPad',
    html: `<div>
            <p style="margin: 0 0 10px;">
              Name: ${name}
            </p>
            <p style="margin: 0 0 10px;">
              Phone: ${phone}
            </p>
            <p style="margin: 0 0 10px;">
              Email: ${email}
            </p>
            <p style="margin: 0 0 10px;">
              Message: ${message}
            </p>
            <p style="margin: 0 0 10px;">
              From: ${from}
            </p>
            </div>`,
  }

  transporter.sendMail(mailOptions, function (err) {
    err ? response.status(422).send(err) : response.status(204).send()
  })
}

export const validationList = [
  check('name')
    .trim()
    .notEmpty()
    .withMessage('Name field is required.')
    .bail(),
  check('phone')
    .trim()
    .notEmpty()
    .withMessage('Phone field is required.')
    .bail()
    .custom((value) => {
      const phone = value.replace(/[^0-9]/g, "");
      return phone.length >= 10 && phone.length <= 20;
    })
    // .isLength({ max: 12, min: 6 })
    .withMessage('Phone field is invalid.')
    .bail(),
  check('email')
    .trim()
    .notEmpty()
    .withMessage('Email field is required.')
    .bail()
    .isEmail()
    .withMessage('Email field is invalid.')
    .bail(),
  check('message')
    .trim()
    .notEmpty()
    .withMessage('Message field is required.')
    .bail(),
]
