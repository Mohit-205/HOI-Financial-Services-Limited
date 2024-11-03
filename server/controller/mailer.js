import nodemailer from 'nodemailer';
import Mailgen from 'mailgen';
import ENV from '../router/config.js';



// // https://ethereal.email/create
// let nodeConfig = {
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//         user: ENV.EMAIL, // generated ethereal user
//         pass: ENV.PASSWORD, // generated ethereal password
//     }
// }

// let transporter = nodemailer.createTransport(nodeConfig);

// let MailGenerator = new Mailgen({
//     theme: "default",
//     product : {
//         name: "Mailgen",
//         link: 'https://mailgen.js/'
//     }
// })

/** POST: http://localhost:8080/api/registerMail 
 * @param: {
  "username" : "example123",
  "userEmail" : "admin123",
  "text" : "",
  "subject" : "",
}
*/
// export const registerMail = async (req, res) => {
//     const { username, userEmail, text, subject } = req.body;

//     // body of the email
//     var email = {
//         body : {
//             name: username,
//             intro : text || 'Welcome to Daily Tuition! We\'re very excited to have you on board.',
//             outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
//         }
//     }

//     var emailBody = MailGenerator.generate(email);

//     let message = {
//         from : ENV.EMAIL,
//         to: userEmail,
//         subject : subject || "Signup Successful",
//         html : emailBody
//     }

//     // send mail
//     transporter.sendMail(message)
//         .then(() => {
//             return res.status(200).send({ msg: "You should receive an email from us."})
//         })
//         .catch(error => res.status(500).send({ error }))

// }



// export const registerMail = async (req, res) => {
//     let testAccount = await nodemailer.createTestAccount();

//     let transporter = nodemailer.createTransport({
//         host: "smtp.ethereal.email",
//         port: 587,
//         secure: false, // true for 465, false for other ports
//         auth: {
//           user: testAccount.user, // generated ethereal user
//           pass: testAccount.pass, // generated ethereal password
//         },
//       });

//       let message = {
//         from: '"Fred Foo 👻" <foo@example.com>', // sender address
//         to: "bar@example.com, baz@example.com", // list of receivers
//         subject: "Hello ✔", // Subject line
//         text: "Successfully Register with us.", // plain text body
//         html: "<b>Successfully Register with us.</b>", // html body
//       }

//       transporter.sendMail(message).then((info) => {
//         return res.status(201)
//         .json({ 
//             msg: "you should receive an email",
//             info : info.messageId,
//             preview: nodemailer.getTestMessageUrl(info)
//         })
//     }).catch(error => {
//         return res.status(500).json({ error })
//     })
// }


export const registerMail = async (req, res) => {

    const { userEmail } = req.body;

    let config = {
        service : 'gmail',
        auth : {
            user: ENV.EMAIL,
            pass: ENV.PASSWORD
        }
    }

    let transporter = nodemailer.createTransport(config);

    let MailGenerator = new Mailgen({
        theme: "default",
        product : {
            name: "HOI Financial Services",
            link : 'https://mailgen.js/'
        }
    })

    let response = {
        body: {
            name : "Welcome",
            intro: "Thank you for signing up with HOI Financial Services!",
            // table : {
            //     data : [
            //         {
            //             item : "Nodemailer Stack Book",
            //             description: "A Backend application",
            //             price : "$10.99",
            //         }
            //     ]
            // },
            outro: "If you have any questions, just reply to this email -- we're always happy to help out."
        }
    }

    let mail = MailGenerator.generate(response)

    let message = {
        from : ENV.EMAIL,
        to : userEmail,
        subject: "Sign Up",
        html: mail
    }

    transporter.sendMail(message).then(() => {
        return res.status(201).json({
            msg: "You should receive an email"
        })
    }).catch(error => {
        return res.status(500).json({ error })
    })


}