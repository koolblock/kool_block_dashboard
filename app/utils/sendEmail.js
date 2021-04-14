import fetch from "node-fetch";

const SENDGRID_API = "https://api.sendgrid.com/v3/mail/send";
const SENDGRID_API_KEY = process.env.NEXT_PUBLIC_SEND_API_KEY;

const sendEmail = async ({ name, email, message }) => {
  console.log(
    "at SendEmail",
    name,
    email,
    message,
    "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",
    SENDGRID_API_KEY
  );
  await fetch(SENDGRID_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${SENDGRID_API_KEY}`,
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email: "kool_block@outlook.com",
            },
          ],
          subject: `KoolBlock - [Contact-Us] from ${name} (${email})`,
        },
      ],
      from: {
        email: "kool_block@outlook.com",
        name: name,
      },
      content: [
        {
          type: "text/html",
          value: message,
        },
      ],
    }),
  });
};

export { sendEmail };
