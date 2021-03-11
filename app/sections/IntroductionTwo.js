import { Box, Grid } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    minHeight: "70vh",
    color: "white",
    textAlign: "center",
    fontSize: "medium",
  },
}));

export default function IntroductionTwo() {
  const classes = useStyles();

  return (
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
          <Image
            src={"/washhands.jpeg"}
            alt="logo"
            width={300}
            height={300}
            objectFit="contain"
          />
          <Box mt={2}>
            Effective and timely anti-viral disinfection is key to building
            employee confidence in their workspace in a post COVID-19 world
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
          <Image
            src={"/washhands.jpeg"}
            alt="logo"
            width={300}
            height={300}
            objectFit="contain"
          />
          <Box mt={2}>
            Effective and timely anti-viral disinfection is key to building
            employee confidence in their workspace in a post COVID-19 world
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
          <Image
            src={"/washhands.jpeg"}
            alt="logo"
            width={300}
            height={300}
            objectFit="contain"
          />
          <Box mt={2}>
            Effective and timely anti-viral disinfection is key to building
            employee confidence in their workspace in a post COVID-19 world
          </Box>
        </Box>
      </Grid>
      {/* <Grid item xs={12} md={6}>
        <Box
          mb={3}
          textAlign="center"
          fontWeight="fontWeightBold"
          fontSize="h3.fontSize"
        >
          KOOLBLOCK
        </Box>
        <Box mb={1} fontWeight="fontWeightMedium" fontSize="h4.fontSize">
          The Problem
        </Box>
        <Box mb={2} fontSize="p.fontSize">
          Workers are unsure about the safety of their workspaces.
        </Box>
        <Box mb={1} fontWeight="fontWeightMedium" fontSize="h4.fontSize">
          The Solution
        </Box>
        <Box fontSize="p.fontSize">
          KoolBlock has developed a digital Workability Index, a measure that
          indicates if a physical worskpace is safe from pathogenic
          contaminants.
        </Box>
      </Grid> */}
    </Grid>
  );
}
