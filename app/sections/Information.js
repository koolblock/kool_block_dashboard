import React from "react";
import { Box, Typography, Button, makeStyles } from "@material-ui/core";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  quote: {
    background: theme.palette.black_koolblock,
    color: "white",
    fontWeight: "bold",
    fontSize: "1.5rem",
    padding: theme.spacing(3),
  },
}));

export default function Information() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Box p={2} mx={5}>
      <Box display="flex" justifyContent="center" flexWrap="wrap" mt={2}>
        <Button
          variant="contained"
          className={classes.quote}
          onClick={() => router.push("/request_demo")}
        >
          Get a free “Path-Safe” risk assessment now: inquire at
          info@koolblock.com
        </Button>
      </Box>
      <Box mt={3} />
      <Typography component="h6" variant="h6" align="center">
        Be a healthy workspace once again. Let your employees know that you are
        actively managing pathogenic risk and testing for pathogens on an
        ongoing basis. Educate your workforce with tested and auditable
        “Path-Safe” procedures which follow the seasoned “Reason Model” of
        occupational safety applied to pathogens. And use naturopathic
        disinfection modes.
      </Typography>
      <br />
      <Typography component="h6" variant="h6" align="center">
        Enterprise approaches are available for large facilities, which can
        automate and integrate processes into their EHS environment and
        software. Now is the time to integrate pathogenic sustainability into
        your organization.
      </Typography>
      <br />
      <Typography component="h6" variant="h6" align="center">
        Testing lets you “see” the positive results of the program, and builds
        employee confidence. Medical grade, safe, disinfection further builds
        workplace confidence. Inquire today at
        <Box fontWeight="fontWeightBold">
          <a href="mailto:info@koolblock.com.">info@koolblock.com.</a>
        </Box>
      </Typography>
    </Box>
  );
}
