import { makeStyles } from "@material-ui/core/styles";
import Block from "../../components/Block";
import SubHeader from "../../components/SubHeader";
import {
  Box,
  Card,
  CardContent,
  Button,
  Typography,
  TextField,
} from "@material-ui/core";
import { createRef, useState } from "react";
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "5vh",
  },
  root: {
    minHeight: "60vh",
    minWidth: "60vw",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 16,
    color: "black",
  },
  pos: {
    marginBottom: 12,
  },
  text_field_single: {
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(3),
  },
  text_field_multi: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    minWidth: "55vw",
    marginLeft: theme.spacing(3),
  },
}));

function ContactUs(props) {
  const classes = useStyles();

  const [sending, setSending] = useState(false);

  const emailEl = createRef();
  const nameEl = createRef();
  const messageEl = createRef();

  const postMail = async () => {
    const email = emailEl.current.value;
    const message = messageEl.current.value;
    const name = nameEl.current.value;

    setSending(true);
    try {
      fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: message,
          name: name,
          email: email,
        }),
      });
    } catch (e) {}
    setSending(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postMail();
  };
  return (
    <>
      <SubHeader title="Contact Us" />

      <Box
        className={classes.container}
        display="flex"
        flexDirection="column"
        pb={10}
      >
        <Block>
          <Box display="flex" justifyContent="center">
            <form method="post" onSubmit={handleSubmit}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    How should we call you?
                  </Typography>
                  <TextField
                    className={classes.text_field_single}
                    id="name"
                    label="Your name"
                    inputRef={nameEl}
                  />
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    Where do we get back to you?
                  </Typography>
                  <TextField
                    className={classes.text_field_single}
                    id="email"
                    label="Your E-mail"
                    inputRef={emailEl}
                  />

                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    What do you want to tell us?
                  </Typography>
                  <TextField
                    className={classes.text_field_multi}
                    id="outlined-multiline-static"
                    label="Your message"
                    multiline
                    rows={8}
                    defaultValue=""
                    variant="outlined"
                    inputRef={messageEl}
                  />
                </CardContent>
                <Box display="flex" justifyContent="center" mb={2}>
                  <Button
                    size="large"
                    variant="contained"
                    color="secondary"
                    type="submit"
                    disabled={sending}
                  >
                    Send
                  </Button>
                </Box>
              </Card>
            </form>
          </Box>
        </Block>
      </Box>
    </>
  );
}

export default ContactUs;
