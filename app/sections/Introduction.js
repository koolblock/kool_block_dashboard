import { Box, Grid } from "@material-ui/core";
import {
  makeStyles,
  List,
  ListItem,
} from "@material-ui/core";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    margin: 15
  },
  image:{
    borderRadius: 2
  }
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
            className={classes.image}
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
        <Box
          mx={3}
          px={2}
          textAlign="center"
          fontWeight="fontWeightBold"
          fontSize="h5.fontSize"
        >
          “Path-Safe” , levels of awareness and preparation awareness,
          implementation, operations
        </Box>
        <Box mb={1} mt={2} fontWeight="fontWeightMedium" fontSize="h5.fontSize">
          3 levels for any operation including
        </Box>
        <Box>
          <List dense={true}>
            <ListItem>
              <Box fontWeight="bold">- Staff Health Procedures</Box>
            </ListItem>
            <ListItem>
              <Box fontWeight="bold">- Air Cleanliness</Box>
            </ListItem>
            <ListItem>
              <Box fontWeight="bold">- Surface Cleanliness</Box>
            </ListItem>
            <ListItem>
              <Box fontWeight="bold">- Procedural Safety</Box>
            </ListItem>
            <ListItem>
              <Box fontWeight="bold">- Testing for Viruses</Box>
            </ListItem>
          </List>
        </Box>
      </Grid>
    </Grid>
  );
}
