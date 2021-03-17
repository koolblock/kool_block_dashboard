import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20vh",
  },
}));
export default function SubHeader({ title, width = "100" }) {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      justifyContent="center"
      style={{ minWidth: `${width}%` }}
      className={classes.root}
    >
      <Typography variant="h3" gutterBottom>
        {title}
      </Typography>
    </Box>
  );
}
