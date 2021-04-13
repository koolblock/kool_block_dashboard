import { Box, Grid } from "@material-ui/core";
import { makeStyles, Typography } from "@material-ui/core";
import Image from "next/image";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    minHeight: "70vh",
    textAlign: "center",
    fontSize: "medium",
  },
  title: {
    marginTop: 40,
    fontWeight: "bold",
    color: theme.palette.green,
  },
}));

export default function IntroductionTwo() {
  const classes = useStyles();

  return (
    <>
      <Typography
        component="h3"
        variant="h3"
        align="center"
        className={classes.title}
      >
        Be ready next time.
      </Typography>
      <Grid
        container
        spacing={3}
        alignItems="center"
        className={classes.container}
      >
        <Grid item xs={12} md={4}>
          <Box
            p={2}
            display="flex"
            justifyContent="center"
            display="flex"
            flexDirection="column"
          >
            <Fade bottom>
              <Image
                src={"/workspace.jpeg"}
                alt="logo"
                width={300}
                height={300}
                objectFit="contain"
              />
            </Fade>
            <Box mt={2}>Give employees confidence in their workspaces</Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            p={2}
            display="flex"
            justifyContent="center"
            display="flex"
            flexDirection="column"
          >
            <Fade bottom>
              <Image
                src={"/test-machine.jpeg"}
                alt="logo"
                width={300}
                height={300}
                objectFit="contain"
              />
            </Fade>
            <Box mt={2}>
              Test results, and include this preparation in our EHS plans
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            p={2}
            display="flex"
            justifyContent="center"
            display="flex"
            flexDirection="column"
          >
            <Fade bottom>
              <Image
                src={"/procedures.jpeg"}
                alt="logo"
                width={300}
                height={300}
                objectFit="contain"
              />
            </Fade>
            <Box mt={2}>
              Understand how to use safe disinfectant procedures and materials
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
