import fetch from "node-fetch";

const SENDGRID_API = "https://api.sendgrid.com/v3/mail/send";
const SENDGRID_API_KEY = process.env.NEXT_PUBLIC_SEND_API_KEY;
const kool_block_email = "kool_block@outlook.com";
const inbox_email = "shawn@koolblock.com";

const sendEmail = async ({ name, email, message }) => {
  try {
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
                email: inbox_email,
              },
            ],
            subject: `KoolBlock - [Contact-Us] from ${name} (${email})`,
          },
        ],
        from: {
          email: kool_block_email,
          name: "KOOLBLOCK",
        },
        content: [
          {
            type: "text/html",
            value: message,
          },
        ],
      }),
    });
  } catch (error) {}
};

export { sendEmail };
