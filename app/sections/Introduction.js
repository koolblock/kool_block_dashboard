import { Box, Button, Grid } from "@material-ui/core";
import { makeStyles, List, ListItem, Chip } from "@material-ui/core";
import Image from "next/image";
import FaceIcon from "@material-ui/icons/Face";
import Wave from "react-wavify";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    margin: 15,
  },
  image: {
    borderRadius: 2,
    width: "100%",
  },
  quote: {
    background: theme.palette.green,
    color: "white",
    fontWeight: "bold",
    fontSize: "1.3rem",
    padding: theme.spacing(2),
  },
  chip: {
    background: theme.palette.green,
    color: "white",
    fontWeight: "bold",
    padding: theme.spacing(2),
    margin: theme.spacing(1),
  },
  right: {
    zIndex: 10,
    color: "white",
  },
}));

export default function Introduction() {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        spacing={3}
        alignItems="center"
        className={classes.container}
      >
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="center" width={1}>
            <Image
              id="image_water"
              className={classes.image}
              src={"/water_video.gif"}
              alt="logo"
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} className={classes.right}>
          <Box
            mt={2}
            mx={3}
            p={1}
            textAlign="center"
            fontWeight="fontWeightBold"
            fontSize="h3.fontSize"
          >
            KOOLBLOCK
          </Box>
          <Box
            mx={3}
            px={2}
            textAlign="center"
            fontWeight="fontWeightBold"
            fontSize="h4.fontSize"
          >
            <span style={{ fontSize: "2.2rem" }}>“Path-Safe”</span> , Natural
            Disinfection Program
          </Box>
          <Box display="flex" justifyContent="center" flexWrap="wrap" mt={2}>
            <Button variant="contained" className={classes.quote}>
              Get a quote today on a Path-Safe Program
            </Button>
          </Box>
          <Box
            mb={1}
            mt={1}
            fontWeight="fontWeightBold"
            fontSize="h5.fontSize"
            textAlign="center"
          >
            Enterprise Solutions available with various EHS software
          </Box>
          <Box
            mb={1}
            mt={2}
            fontWeight="fontWeightBold"
            fontSize="h5.fontSize"
            textAlign="center"
          >
            3 levels for any operation including
          </Box>
          <Box display="flex" justifyContent="center">
            <Box
              textAlign="center"
              justifyContent="center"
              display="flex"
              flexWrap="wrap"
              width={"70%"}
            >
              <Chip
                label="Staff Health Procedures"
                className={classes.chip}
                clickable
                color="primary"
              />
              <Chip
                label="Air Cleanliness"
                className={classes.chip}
                clickable
                color="primary"
              />
              <Chip
                label="Surface Cleanliness"
                className={classes.chip}
                clickable
                color="primary"
              />
              <Chip
                label="Procedural Safety"
                className={classes.chip}
                clickable
                color="primary"
              />
              <Chip
                label="Testing for Viruses"
                className={classes.chip}
                clickable
                color="primary"
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
