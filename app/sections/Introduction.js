import { Box, Grid } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
  },
}));

export default function Introduction() {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={3}
      alignItems="center"
      className={classes.container}
    >
      <Grid item xs={12} md={6}>
        <Box display="flex" justifyContent="center">
          <Image
            src={"/washhands.jpeg"}
            alt="logo"
            width={500}
            height={500}
            objectFit="contain"
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          m={3}
          p={2}
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
        <Box fontSize="p.fontSize" mb={3}>
          KoolBlock has developed a digital Workability Index, a measure that
          indicates if a physical worskpace is safe from pathogenic
          contaminants.
        </Box>
      </Grid>
    </Grid>
  );
}
