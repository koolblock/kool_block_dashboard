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
  Snackbar,
  Select,
} from "@material-ui/core";
import { createRef, useState } from "react";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "5vh",
  },
  root: {
    border: `solid 2px ${theme.palette.black_koolblock}`,
    minHeight: "60vh",
    minWidth: "30vw",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    marginTop: 20,
    fontSize: 16,
    color: "black",
  },
  pos: {
    marginBottom: 12,
  },
  text_field_single: {
    marginBottom: theme.spacing(2),
    minWidth: "10vw",
  },
  text_field_single_select: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    minWidth: "10vw",
  },
  text_field_multi: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    minWidth: "30vw",
    marginLeft: theme.spacing(2),
  },
}));

function RequestDemo(props) {
  const classes = useStyles();

  const [sending, setSending] = useState(false);
  const [hasEhs, setHasEhs] = useState(false);

  const [open, setOpen] = useState(false);

  const websiteEl = createRef();
  const emailEl = createRef();
  const employee_numEl = createRef();
  const company_nameEl = createRef();
  const messageEl = createRef();
  const location_numEl = createRef();
  const nameEl = createRef();

  const requestDemo = async () => {
    const website = websiteEl.current.value;
    const location_num = location_numEl.current.value;
    const employee_num = employee_numEl.current.value;
    const message = messageEl.current.value;
    const company_name = company_nameEl.current.value;
    const email = emailEl.current.value;
    const name = nameEl.current.value;

    const text_message = `
    This is a demo request from ${company_name} by ${name}. 
    <br/><br/>
    Company Size : ${employee_num} Employees 
    <br/><br/>
    Location Numbers : ${location_num} Locations 
    <br/><br/>
    Have used EHS Enterprise software : ${hasEhs ? "Yes" : "no"} 
    <br/><br/>
    Website Address : ${website} 
    <br/><br/>
    <br/><br/>
    This is a message from ${name} 
    <br/><br/>
    ${message}
    `;

    setSending(true);
    try {
      fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text_message,
          name: name,
          email: email,
        }),
      });
    } catch (e) {}
    setOpen(true);
    setSending(false);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSelectChange = (e) => {
    setHasEhs(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    requestDemo();
  };
  return (
    <>
      <SubHeader title="Request a demo" />

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
                  <Box display="flex" justifyContent="space-between">
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      What is your name?
                    </Typography>
                    <TextField
                      className={classes.text_field_single}
                      id="name"
                      label="Your Name"
                      inputRef={nameEl}
                    />
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      Which organization are you representing?
                    </Typography>
                    <TextField
                      className={classes.text_field_single}
                      id="company_name"
                      label="Company Name"
                      inputRef={company_nameEl}
                    />
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      How many employees do you have?
                    </Typography>
                    <TextField
                      className={classes.text_field_single}
                      id="employee_num"
                      label="Number of employees"
                      inputRef={employee_numEl}
                    />
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      How many locations do you have?
                    </Typography>
                    <TextField
                      className={classes.text_field_single}
                      id="location_num"
                      label="Number of locations"
                      inputRef={location_numEl}
                    />
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      Do you have an website?
                    </Typography>
                    <TextField
                      className={classes.text_field_single}
                      id="website"
                      label="Website address"
                      inputRef={websiteEl}
                    />
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      Do you use an EHS enterprise software?
                    </Typography>
                    <Select
                      className={classes.text_field_single_select}
                      native
                      value={hasEhs}
                      onChange={handleSelectChange}
                    >
                      <option value={false}>No</option>
                      <option value={true}>Yes</option>
                    </Select>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      How do we contact you?
                    </Typography>
                    <TextField
                      className={classes.text_field_single}
                      id="email"
                      label="Contact Email"
                      inputRef={emailEl}
                    />
                  </Box>
                  <Box>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      Any questions?
                    </Typography>
                    <TextField
                      className={classes.text_field_multi}
                      id="outlined-multiline-static"
                      label="Your message"
                      multiline
                      rows={4}
                      defaultValue=""
                      variant="outlined"
                      inputRef={messageEl}
                    />
                  </Box>
                </CardContent>
                <Box display="flex" justifyContent="center" mb={2}>
                  <Button
                    size="large"
                    variant="contained"
                    color="secondary"
                    type="submit"
                    disabled={sending}
                  >
                    {sending ? "SENDING EMAIL" : "SEND"}
                  </Button>
                </Box>
              </Card>
            </form>
          </Box>
        </Block>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Email sent, thank you for contacting us.
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
}

export default RequestDemo;
