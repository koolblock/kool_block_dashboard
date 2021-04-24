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
                width={500}
                height={500}
                objectFit="contain"
              />
            </Fade>
            <Box my={2} fontWeight="fontWeightBold" fontSize="h5.fontSize">
              Clean Air
            </Box>
            <Box fontWeight="fontWeightMedium" fontSize="h6.fontSize">
              Many pathogens are transmitted through air <br />
              The Path-Safe program can remove them with HEPA filters and UV-C
              light disinfection
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
                src={"/test-machine.jpeg"}
                alt="logo"
                width={500}
                height={500}
                objectFit="contain"
              />
            </Fade>
            <Box my={2} fontWeight="fontWeightBold" fontSize="h5.fontSize">
              Naturopathic
            </Box>
            <Box fontWeight="fontWeightMedium" fontSize="h6.fontSize">
              Path-Safe uses powerful natural disinfectants <br />
              There are no harmful toxic chemicals involved <br />
              Only use natural inputs, water and salt and electricity <br />
              Fully biodegradeable <br />
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
                width={500}
                height={500}
                objectFit="contain"
              />
            </Fade>
            <Box my={2} fontWeight="fontWeightBold" fontSize="h5.fontSize">
              Effective Testing
            </Box>
            <Box fontWeight="fontWeightMedium" fontSize="h6.fontSize">
              Workspaces are fully tested to “see” pathogenic loads <br />
              Dirty areas can bee seen and identified <br />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
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
                width={500}
                height={500}
                objectFit="contain"
              />
            </Fade>
            <Box my={2} fontWeight="fontWeightBold" fontSize="h5.fontSize">
              Disinfection Versus Cleaning
            </Box>
            <Box fontWeight="fontWeightMedium" fontSize="h6.fontSize">
              Cleaning removes dirt and germs from surfaces <br />
              It doesn’t necessarily kill the germs <br />
              Disinfection kills germs (bacteria and viruses) on surfaces <br />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
